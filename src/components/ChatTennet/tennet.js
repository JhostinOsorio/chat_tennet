export function tennetFn() {
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) a(e);
    new MutationObserver((e) => {
      for (const o of e)
        if (o.type === "childList")
          for (const n of o.addedNodes)
            n.tagName === "LINK" && n.rel === "modulepreload" && a(n);
    }).observe(document, { childList: !0, subtree: !0 });
    function i(e) {
      const o = {};
      return (
        e.integrity && (o.integrity = e.integrity),
        e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy),
        e.crossOrigin === "use-credentials"
          ? (o.credentials = "include")
          : e.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
        o
      );
    }
    function a(e) {
      if (e.ep) return;
      e.ep = !0;
      const o = i(e);
      fetch(e.href, o);
    }
  })();
  function m(r) {
    return r
      .replace("data-", "")
      .toLowerCase()
      .replace(/([-_][a-z])/g, (t) =>
        t.toUpperCase().replace("-", "").replace("_", "")
      );
  }
  function f(r) {
    const t = {
      theme: "default",
      tenetId: void 0,
      sessionName: void 0,
      sessionEmail: void 0,
      time: void 0,
    };
    r.getAttributeNames().forEach((s) => {
      s.startsWith("data-") && (t[m(s)] = r.getAttribute(s))
    })
    const i = t.extraCodigoCurso,
      a = t.extraClientUid || t.sessionName;

    const time = t.time || 4e3
    let e = !1;
  
    function n(s) {
      const c = document.getElementById("bubble");
      if (c) {
        (c.innerHTML = `${s}`)
        s === 0 ? c.classList.add("hidden") : c.classList.remove("hidden")
      }
    }
    async function u() {
      const s = await fetch(
        `https://www.tenetcomm.com/mazz/api/v1/messages/session/count-v2?messageDirection=1&codigoCurso=${i}&clientUid=${a}`,
        { method: "POST", mode: "cors" }
      );
      n(await s.json());
    }
    setInterval(async () => {
      await u();
    }, time);
    function l() {
      const s = r.getElementsByClassName("chat-window")[0];
      const chatBtn = r.getElementsByClassName("chat-button")[0];
      (e = !e)
        if (e) {
          s.classList.remove("hidden")
          chatBtn.style.opacity = '0'
        } else {
          s.classList.add("hidden")
          chatBtn.style.opacity = '1'
        }
        s.getElementsByClassName("close")[0].addEventListener("click", () => l());
    }
    r.getElementsByClassName("chat-button")[0].addEventListener("click", () =>
      l()
    );
  }
  
  let d = document.querySelectorAll("[data-tenet-id]");
  d
  ? d.forEach((r) => {
        f(r);
      })
    : console.warn("No query selector for [data-tenet-id]");
  
  }