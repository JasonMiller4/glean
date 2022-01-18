initSidebarItems({"enum":[["ErrorType","The possible error types for metric recording. Note: the cases in this enum must be kept in sync with the ones in the platform-specific code (e.g. `ErrorType.kt`) and with the metrics in the registry files."],["HistogramType","Different kinds of histograms."],["Lifetime","The supported metrics’ lifetimes."],["MemoryUnit","Different resolutions supported by the memory related metric types (e.g. MemoryDistributionMetric)."],["TimeUnit","Different resolutions supported by the time related metric types (e.g. DatetimeMetric)."]],"fn":[["get_timestamp_ms","Returns a timestamp corresponding to “now” with millisecond precision."],["handle_client_active","Performs the collection/cleanup operations required by becoming active."],["handle_client_inactive","Performs the collection/cleanup operations required by becoming inactive."],["initialize","Creates and initializes a new Glean object."],["join_init","TEST ONLY FUNCTION Waits on all the glean.init threads’ join handles."],["persist_ping_lifetime_data","Dispatches a request to the database to persist ping-lifetime data to disk."],["register_ping_type","Register a new `PingType`."],["rlb_flush_dispatcher","Unblock the global dispatcher to start processing queued tasks."],["set_debug_view_tag","Sets a debug view tag."],["set_experiment_active","Indicate that an experiment is running.  Glean will then add an experiment annotation to the environment which is sent with pings. This infomration is not persisted between runs."],["set_experiment_inactive","Indicate that an experiment is no longer running."],["set_log_pings","Sets the log pings debug option."],["set_source_tags","Sets source tags."],["set_upload_enabled","Sets whether upload is enabled or not."],["shutdown","Shuts down Glean in an orderly fashion."],["submit_ping_by_name","Collects and submits a ping for eventual uploading by name."],["test_get_experiment_data","TEST ONLY FUNCTION. Returns the [`RecordedExperimentData`] for the given `experiment_id` or panics if the id isn’t found."],["test_is_experiment_active","TEST ONLY FUNCTION. Checks if an experiment is currently active."],["test_reset_glean","TEST ONLY FUNCTION. Resets the Glean state and triggers init again."]],"mod":[["net","Handling the Glean upload logic."],["private","The different metric types supported by the Glean SDK to handle data."],["traits","API definitions for the different metric types supported by the Glean SDK."]],"struct":[["ClientInfoMetrics","Metrics included in every ping as `client_info`."],["CommonMetricData","The common set of data shared across all different metric types."],["Configuration","The Glean configuration."],["DistributionData","A snapshot of all buckets and the accumulated sum of a distribution."],["Error","A specialized `Error` type for this crate’s operations."],["Glean","The object holding meta information about a Glean instance."],["RecordedEvent","Represents the recorded data for a single event."],["RecordedExperimentData","Deserialized experiment data."]],"type":[["Datetime","A datetime type."],["Result","A specialized `Result` type for this crate’s operations."],["TimerId","Identifier for a running timer."]]});