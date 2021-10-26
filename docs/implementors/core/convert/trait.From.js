(function() {var implementors = {};
implementors["glean_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"glean_core/enum.ErrorKind.html\" title=\"enum glean_core::ErrorKind\">ErrorKind</a>&gt; for <a class=\"struct\" href=\"glean_core/struct.Error.html\" title=\"struct glean_core::Error\">Error</a>","synthetic":false,"types":["glean_core::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;HandleError&gt; for <a class=\"struct\" href=\"glean_core/struct.Error.html\" title=\"struct glean_core::Error\">Error</a>","synthetic":false,"types":["glean_core::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.56.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"glean_core/struct.Error.html\" title=\"struct glean_core::Error\">Error</a>","synthetic":false,"types":["glean_core::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;StoreError&gt; for <a class=\"struct\" href=\"glean_core/struct.Error.html\" title=\"struct glean_core::Error\">Error</a>","synthetic":false,"types":["glean_core::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"glean_core/struct.Error.html\" title=\"struct glean_core::Error\">Error</a>&gt; for ExternError","synthetic":false,"types":["ffi_support::error::ExternError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.66/serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"glean_core/struct.Error.html\" title=\"struct glean_core::Error\">Error</a>","synthetic":false,"types":["glean_core::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.56.0/std/ffi/os_str/struct.OsString.html\" title=\"struct std::ffi::os_str::OsString\">OsString</a>&gt; for <a class=\"struct\" href=\"glean_core/struct.Error.html\" title=\"struct glean_core::Error\">Error</a>","synthetic":false,"types":["glean_core::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt; for <a class=\"struct\" href=\"glean_core/struct.Error.html\" title=\"struct glean_core::Error\">Error</a>","synthetic":false,"types":["glean_core::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.0/std/primitive.u32.html\">u32</a>&gt; for <a class=\"enum\" href=\"glean_core/upload/enum.UploadResult.html\" title=\"enum glean_core::upload::UploadResult\">UploadResult</a>","synthetic":false,"types":["glean_core::upload::result::UploadResult"]}];
implementors["glean_ffi"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.56.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.0/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.56.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"glean_ffi/byte_buffer/struct.ByteBuffer.html\" title=\"struct glean_ffi::byte_buffer::ByteBuffer\">ByteBuffer</a>","synthetic":false,"types":["glean_ffi::byte_buffer::ByteBuffer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"glean_core/upload/enum.PingUploadTask.html\" title=\"enum glean_core::upload::PingUploadTask\">PingUploadTask</a>&gt; for <a class=\"enum\" href=\"glean_ffi/upload/enum.FfiPingUploadTask.html\" title=\"enum glean_ffi::upload::FfiPingUploadTask\">FfiPingUploadTask</a>","synthetic":false,"types":["glean_ffi::upload::FfiPingUploadTask"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()