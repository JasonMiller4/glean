/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

package mozilla.telemetry.glean.private

import com.sun.jna.StringArray

import mozilla.telemetry.glean.Glean
import mozilla.telemetry.glean.rust.LibGleanFFI
import mozilla.telemetry.glean.rust.toByte

/**
 * This implements the developer facing API for labeled metrics.
 *
 * Instances of this class type are automatically generated by the parsers at build time,
 * allowing developers to record values that were previously registered in the metrics.yaml file.
 *
 * Unlike most metric types, LabeledMetricType does not have its own corresponding storage engine,
 * but records metrics for the underlying metric type T in the storage engine for that type.  The
 * only difference is that labeled metrics are stored with the special key `$category.$name/$label`.
 * The |StorageEngineManager.collect| method knows how to pull these special values back out of the
 * individual storage engines and rearrange them correctly in the ping.
 */
class LabeledMetricType<T>(
    disabled: Boolean,
    category: String,
    lifetime: Lifetime,
    name: String,
    labels: Set<String>? = null,
    private val sendInPings: List<String>,
    private val subMetric: T
) {
    private val handle: Long

    init {
        val ffiPingsList = StringArray(sendInPings.toTypedArray(), "utf-8")
        val labelList = labels?.let { StringArray(it.toList().toTypedArray(), "utf-8") }
        val metricTypeInstantiator = when (subMetric) {
            is CounterMetricType -> LibGleanFFI::glean_new_labeled_counter_metric
            is BooleanMetricType -> LibGleanFFI::glean_new_labeled_boolean_metric
            is StringMetricType -> LibGleanFFI::glean_new_labeled_string_metric
            else -> throw IllegalStateException(
                "Can not create a labeled version of this metric type"
            )
        }

        this.handle = metricTypeInstantiator(
                LibGleanFFI.INSTANCE,
                category,
                name,
                ffiPingsList,
                sendInPings.size,
                lifetime.ordinal,
                disabled.toByte(),
                labelList,
                if (labels != null) { labels.size } else { 0 })
    }

    /**
     * Get the specific metric for a given label.
     *
     * If a set of acceptable labels were specified in the metrics.yaml file,
     * and the given label is not in the set, it will be recorded under the
     * special [OTHER_LABEL].
     *
     * If a set of acceptable labels was not specified in the metrics.yaml file,
     * only the first 16 unique labels will be used. After that, any additional
     * labels will be recorded under the special [OTHER_LABEL] label.
     *
     * Labels must be snake_case and less than 30 characters. If an invalid label
     * is used, the metric will be recorded in the special [OTHER_LABEL] label.
     *
     * @param label The label
     * @return The specific metric for that label
     */
    @Suppress("UNCHECKED_CAST")
    operator fun get(label: String): T {
        return when (subMetric) {
            is CounterMetricType -> {
                val handle = LibGleanFFI.INSTANCE.glean_labeled_counter_metric_get(Glean.handle, this.handle, label)
                CounterMetricType(handle = handle, sendInPings = sendInPings) as T
            }
            is BooleanMetricType -> {
                val handle = LibGleanFFI.INSTANCE.glean_labeled_boolean_metric_get(Glean.handle, this.handle, label)
                BooleanMetricType(handle = handle, sendInPings = sendInPings) as T
            }
            is StringMetricType -> {
                val handle = LibGleanFFI.INSTANCE.glean_labeled_string_metric_get(Glean.handle, this.handle, label)
                StringMetricType(handle = handle, sendInPings = sendInPings) as T
            }
            else -> throw IllegalStateException(
                "Can not create a labeled version of this metric type"
            )
        }
    }
}
