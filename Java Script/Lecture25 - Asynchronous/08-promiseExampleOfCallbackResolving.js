const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = src;

    document.body.appendChild(script);

    script.onload = () => {
      resolve("Script Successfully Loaded");
    };

    script.onerror = () => {
      reject("Script Failure");
    };
  });
};

let src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";

let p = loadScript(src);
p.then((value) => console.log(value)).catch((err) => console.log(err));
