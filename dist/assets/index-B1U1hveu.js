import {
  r as b,
  a as Mr,
  R as O,
  u as Hr,
  L as pe,
  g as Xe,
  b as qr,
  N as le,
  c as zr,
  d as Qr,
  e as Kr,
  f as se,
  B as _r,
} from './react-Cnz1zM1f.js';
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const a of s)
      if (a.type === 'childList')
        for (const i of a.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const a = {};
    return (
      s.integrity && (a.integrity = s.integrity),
      s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : s.crossOrigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const a = n(s);
    fetch(s.href, a);
  }
})();
var Gt = { exports: {} },
  Ve = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yr = b,
  Xr = Symbol.for('react.element'),
  Vr = Symbol.for('react.fragment'),
  Jr = Object.prototype.hasOwnProperty,
  Wr = Yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Gr = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zt(e, t, n) {
  var r,
    s = {},
    a = null,
    i = null;
  n !== void 0 && (a = '' + n),
    t.key !== void 0 && (a = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Jr.call(t, r) && !Gr.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: Xr,
    type: e,
    key: a,
    ref: i,
    props: s,
    _owner: Wr.current,
  };
}
Ve.Fragment = Vr;
Ve.jsx = Zt;
Ve.jsxs = Zt;
Gt.exports = Ve;
var o = Gt.exports,
  ut = {},
  Rt = Mr;
(ut.createRoot = Rt.createRoot), (ut.hydrateRoot = Rt.hydrateRoot);
const Zr = '/assets/logo-Cjjg64Ai.png',
  $r = '/assets/hero_img-CKVi6Cqg.jpg',
  en =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAnCAYAAABnlOo2AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL2SURBVHgBxVhLktowEG0b9vHsYDXOCcJ3z5wgcAKSE4Q5wXADyCpLnBMMOUHImgKcE0RZkV3IAYC8dklO4wxYdhnzqlT6S8/drVbLDuVAo9HwKpVKD8Xh8XhsIPd1V+g4jkI+X61WnykHHMqIdrvdB4mJIHEOCuTGWYlVsgxutVpjZJ+QPIvhPKZfr9ed7Xa7IEu4tgM1mSdTh5R2h8NhjNxfr9cOJ9SbSCO0KTH1Sc+1gpXKsOA7ZDNTx6YBsscwDHcvjYeN+VDXBKkv5jxg/IIKIvSDtM3g6+ebzWZgM6/ZbAYgNdRVBSm+TpuTqjI2YkFGIT2SJTB2hMxI0YfkemlzUglh0bemjK9dQOyKLKFVOo03c91h2hwbo24IcgFlBGznm6j20sbbEJJHXFF2qCyDXzTqbrfb2O/3RjITQYpt4g9lg6fXYLAKIxuEpw+Xy2V4kRAfVwycQTU9KgFsk/jw99IuHUkGRrchOy9cJHbaR0XSqppWkPlqyLAXBvs5XQlY3xNO08Pez8gjHxVJSF+Yz4YMUjPL8c6DpEaMJ3c1iTdmIEvm2mQYeo/A1EEu8nfm2Pv0j9CCysN3UfZiQiDhm1aITskZfFMjHZEmlBOYO9VrjGU79o0vZ7armFAKjLsfUX58SKwVAUdeiaofE+KYRnTIQSyxjzofU35MdfwUJNpjCUFakYSiU8biFATuzsU5RYNjcxjzb0MO4cndf4Q48qMSkRSGy/5A9CsqH8oUoLZXbrVa9U1DIhYuC/Kk3VkH+ddCQgj3LvTmm5p+5JUK6YsQaXgsoXvRX8rpSuDEObrnOkuE3NNnQr6p3UJlwE9R9txL91gZSN5nNz9lyfvMvXSPlYST++zEhkAu64uiUELENiR7yrpUL+wZEVKmZvP2Lhr6z0oEaChkQoFpQCgwQ8Cf+v4uCp1Op0finxNsKHQ4JkFhI4//LaD/rDy4rEMUBje66SWZAb9Eon+Mv4BarfaFjx06WHQ1KgGaCP+uiZ/TfwGEUnnMaG3eugAAAABJRU5ErkJggg==',
  tn =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFRSURBVHgB7ZfhTcMwFITPEf/JCBkBNggTUCYAJqAj0A1ggzABZYHEbJANmm4QFgicwUJVlTq8F6Wkkj/p5DaX1Ff7pc0zEJLn+ROHB8ElDXVjra0F1yCBHEkoR0ZdQ8gZ9DSUDfgZlUPJqGDcnvtDJrc8x4hgmq08CoZfbAFZDdz5saXWgfNSauFf115/wX3uygX7xPxYuq0sMC/cir2Z/aM7K8jatleYCH9zVP7tI+da7fqzLf4YTMpsg6l++Vm3GX7+M99ZtOuAX9N/gQLtirlJl9QrQ6QBvzjgTxbsd7IkSc4V/iCx+KXEYFJiMCkxmJQYTEoMJkUbrPFjW5blNuCj67oPKNB24s/U1hiz6TNdY8HHnW+/qqoWClTBOLGbrBg4J+gPEYtfykk2I6lvKqYi2AuEgl1QG/wTfVupur1H0uwf6FuxS+oWx6Pt6z2/APN7VZph5zBWAAAAAElFTkSuQmCC',
  rn =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEJwAABCcASbNOjQAAAGASURBVEhLrZa7cYQwFEX5RiRbwpawLoEEhtAVeN2BOzCuxHYFJMzwSWjBJVCCIzLA74KQWRAgBGcG0GOGw9WHERrIsizM8/y9Kw6iJ0lyN03zk9Wh53kfrK2EQbywNgjxAtZWwqiq6pmuP32paUh7RKrjFEXRxXGcgpo31KCu69cgCL5YKU0nBGdJuRBQV6/UZUiv/Z390gchEEnbtn3yfZ+P8xoGu3IoTUmpXGqW/Z1OWNBa5UOxxizhwDRp0zS/uq67W0kXhUBFuioEe6WbQiCSYqIw3qjHzCZFxHSi6HO90FHgRajHSCUcmCallCWldcdJdwnBlnS3EKxJlYQgjuObZVkFxhP1IJWaFBG2bWu0fFj1j5IQXSZZRMdDOqUunzoppy4bGRmQEk5lJFr8njeFe2RgVbhXBhaFKjIgFKrKwEw4lQGaUbVNCnuzQHaXlQEuHG30U9k3K6Xouiz6a1CRAf1MGTDOlAGDlgR/mDaityMyDi2VME3TE36JNe0PEvQ33QXCa5oAAAAASUVORK5CYII=',
  nn =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR1SURBVHgB7ZzrbdswFIVPgQ7QDXI3aDYIN2g6gbRBsoHUCdIN3E4QdAJlg6QT2J0g2SDlhaVaNUTy8iGKMvQB94dhiyIPD5+iBWxsbGxsbGyk4QPKgHRc6/ik42ri+zcdf3Qc+njDwiwlnOrjBifBfHjp45eOJxQg5JywQK2OVx3vieNRR4ULQ+nokF6sqdjjKCBhxSjkE8wk4Krg/uo7lhFsSkDCClA4Zja2wK99OinS4mhRMPcIE2in4w7HEfbKkDa7mAeXLzoedDwH3IuvIRSGj2gsFhf+BnGQjhp+riyu6SrIBGvgP2eTwJXQYaXi2TI+l2Dn1JA5kCuRUAgK07V7jfw0WJnzxq7jfiyHy0zcwr1K4QFjyTz+Q+HUNEuA4G66D8gA145y/KZCWRDc4t1iZnhF0GF9EOzicZOercnS6EYK64MHqUWa7LjjX6PrGNdEXSExKsdNMjE2wHkkN0SX4yaZINinKcnmnYSM1s5Egwx93Q4ZrZ0JHkFNrks2wu5h71AJ64SdNVtLUnCv+XaIh2uYkAZpH6UwY5kauIWLtTZfy2tGdjYhjhbHPFXC33cwlykK29A9jgZhDKIN6cSI157lSSKezRhXiED6DDTEdeeixYjXGvLlEk/BXCaJ8JO4ligxrjOJFiJe68hX5ciH6brgaYmCn3BS17lE8xGvFaTTONIw5eURgdSAl3CSTEpFk4jXJsgPs7PcO4gG8gJKXOcrmk28VnCdRDTmAQUIx1FNpBUq2pR4reD3UtFc5TTyEWE8Wb5TOn6OPrNoHdwT0wPMzZL6NPhY1x3stDq+nV1Llt/bvgvCVBM+FpY6rYJsizvEaSoivSCayAR9RBsghIvXWPLSBaQXvHq4syTqmnaEiDZA8BevceRHeabn27L+o7YkauuvYkQbIMjFc4k20EEu2jsitsxsKwdboW8FmarghuAWTyoaoyAXjSN4AhyzHKkRJ9oAwSyej2gDHeTCuUZvK6ZMPwuurREn2gBN5CNENEZBLtwNIrDtkkrWpTXiRBsgnMQLFW3AZIaQ8hmpEW/lGmmORRAim09PjRkHhgHbQ43oxBfEtc+YooKsHarCOmlgF46QAIUZLb0Q2VqSzdoK68TkugoJsVl7j0JONXoy5bo9EmOzNkeWU40zcG6IpG4bcB2Rmv1U4wyMDZHcbWNsi/eijsB7MEzyZ3HbgILddVxrhHVBSHOMw4ltGVaieC1kT9+y0MEt3hJ/DBnDYvzAqRspYuQnyBbLLZaBkG5HJTkEmXgd8jbdFtNTp2Jcx3BzlIjHscO8Aiqk3TGeHYLfw5WUArKDeCejE967KNcxBP8nUzwnZAco+EE47qmxWL6v4kiyXcSkfGEL1yQLcY8wXmB+kw3h2C0Qwhxz0PG1v0ex1Ej3EoIUsfTfP70g2I/554g94v/3vxiE/AKyYBUuBMJRQC7UXIJ1OL5e42LhwqUSkcVqEHlCPISUo2oI1318xul1aOd/Fnnr49DH8Aq037jw159tbGxsbGxsbFj4C7XOZoyRzeTiAAAAAElFTkSuQmCC',
  sn =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAnCAYAAACBvSFyAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN4SURBVHgBzVg7ctpAGF4BRbrQ2TMuopzAiu2CVMFdOucGOCcInMBwAsMJwCeIXaU0dGQGiLiBUpF0KhmGR75PrMhK6LHi4fE/s7MP7e7/7b//a2WIHejq6qq8Wq0qKGV0TTlss+RyuYfBYNAVGcjIMtmyLDOfz7cl8yTqLJfLhm3bjjgkCACwcMpnNIuaSxwAudYBkhMaRAkAwHcfACThgkEd5cNoNDJYpHQ6yjKuecbaVNB5oUFnZ2dtVCUJwEH5iBM+/QH5c9D8PZlMnk5OTsaGYXzG0BuCRnuK8V7S/qnXIa/hl9/H6d+niRhLqlhzL7uuXOPGzU+9DmxWUbodnTvGnCakZcsur+NTIg+RQhCn5bdxokehSVjX3TDJ5SyxD4jQxm6G6WOlbYpDgYCIdc2T9FZpu3uBoDVsJqeINbSu7LdxjbbYB0RID6o6dk+/gqv7ogz19gIhN/DFWVRMLw5AUXpWjyCRbppFpTorOKEpHNBf5WTW6ekpy098C9w1AxuqH0JRRIC4Ds8LU5bYcYcT1gOL12boSGbUl4DO4CqrkEIrbe+sUXQLSBQxtqAQwIPQoEwgJBAq3X1I8TbMMc4w3tIN4zuBUMAwOJ2DseltZBgMbOOkGPGqaWdJlEolk/VisSjSkxYKBWc6nbq7SEILBBnOZrMbBrNQXhlFBOGg2LQegOyl6UcsCOl0KlRAjZwykaQpt4bD4aM2iMvLSzKmZzRFDNESxPrUfuFcKmuSW4/MOwMgpMY3USoRDG3UPAnduBN394rVWJQiSjliWgN5aX0LhOLzLZU5ShPN1q6mJ5PkOzRvQ586API1AOLi4qKtToTYyLxxKLuPcXI1AGkaEsAtqrYCoA7mDXEEAi/qWlV2vSTYC+UQ+Y0yr3MsACScvMbwLrtUgW8eCFV5+HwTRybw2wQ2KrCf1GzMKkvg2ZVwekfpFjMluoei+XweUHYfxGZQJ4fclyBtm8pPv4NSK8hxR/z3D6y74sikKr8via4/QFt+CWmo5IFgJqSA8B7AiB8V8UKkuu1qRDrPdK3Lxy1qPvld5g380O/3nagN/TwDymficGyfY50p/2nUojxwOIBVpZ8/ynUAzC3C+VbyGzBRPun59wXNjvr8OwRREkxwor4lZlb8QYLqHaRTlgktJeTVcXmDAt5h8ivW8YFv0ae4YPgPspPhtg0cN1gAAAAASUVORK5CYII=',
  on =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAenSURBVHgB7VyNWRs9DFa+CdiAbFA2IN8EsAF0AmCC0AlIJ0i/CRghdALaCY4NKBPo83uJU0dItnw/SfqU93lESHKXs9+TZEm2j+gDfzaYeRbkIciUPqAD5ARZ8W80Qa7oA78RCDkJsmAbIO2C/nYEEm6DvEp2Xl9fNdKWf6VpbvzSSrKxWq347OyMcch8PuemaTTS7g9B2oQGROjAZXi5cRx6EuQs/eDl5YWur6/p+/fvOwdOp1MKpLXfCbxspIjJZPIvHRM2fkdVgxxgbtCgk5OTVpssCaTx8/Mzd8Scjgkb06jCcrlsSaAMSVKChlmmmQMc4An1xCBmyGv/0cT39/f39PT0lD3n7e2Nfvz4QV0QtJA+ffpUPO7bt2+tGW+wCOZ4R4cGr0epFrjrVKEpY8psNpMadkY90FuzNg14ju/DSEY/f/50nRs602oIzoFAC6A1EtDAX79+ta8YAPCKAcGDMLq219ng6aDOnhOnDh9Ejrv98PBgxVFuIMS4uroq+jx8LzCjQyBc+DptRa7hNzc3fUazLEoDBW5OgoYHcPZV4HUe18QWYPjXGnp5edll9BqUNIQlQpMfaF9gkaJoTh2NhqnsG2jL7e3tu/bgM4Elj5kFsJGiwHeQ0CavT8Jx0AiY6cXFRZvqnJ6etoL/z8/P29+HKdWQr2lZJnUazix5bXKP8iq4uCQqxFjsIQhmCyKoMhyASSEw9RCH9qWE4X+QqB3KfUtBvE5h0PtXrbMyRSkR5U1tvJLpvElYPM/QMnxYH4vxeqR7Z0uWEy0RBTMaiiQpMNfcIKIRBsmkTkuuMU0Wvglqb5lNjig0pou5dRFobS1huIHGeefkRUqWFRbQxplbQFxVmyj3FWXU22kPZUxaaFk3sizNyNh+27CxzK4kMC8LcAfWeWLQGJYsy7kekigPYUi59kqW1RjLNxxCLB9mmeNoZFnmdyxEGQRsoUX5o5BlaVVuIBhbcJM008fnWjaBz/ZClqZV+OwQfgr+J20POiy12zJHpFejkqVUH1vItGcfgmBUg0zslarDlthRydJGwEOUki3zipAjnqVdqTUIst7NgP9jEDULL7P4HiXdiKREu0VpcmJooPyMcrFWgo4IVYud91+/ft3pR0SwiO3/4vtb8oCNUrFlgnEGeR+SC4RTaCO4NjKmplhdguakVAw1T50lak4S+zRBmIynNG21SWu/HBXdJWgulIofH9+VtNrPSpqA/NGKmmtEu75GlBXrKZrTAoXG9IYIXzi3yFqkFyWHGuNuWZ0Lk5w7x2rDulc8RUVP9qANCjKEEMk4TphqWrWFFgp4LhRlsVh07lAXotA2j+/UzFi74UIxlpKsZfxGxh9RNFhJdqkGr6UbmuRKLilg6p7f00xZyzyUwWwWiXLN/2lI7b10rAQ0JtexXK0sRc4VSNHiRCtNE8SuYpx1GjUMsYZ3ajwHT+yFdVfBLNLFG1tgOj90rPgbWISCGGoMiD7M2r+8nph4LTFdo1lWTKZBm4XxxFJdEnevGSptmG9p4/XEaQv4Gy0p1pCrr8sktwT4Jy9RnnUVmmgjukaWGFQakuAkxtLKr1onSgm0t/MRnsnZPpVYTx+UeOxKI2vHdmQgqalwrqYdBR0TkXFn9KnEoh0apHWIQeCZLHBSbZAhhNZhK8zQJDdVNTZRRLYfTbVUGYGnObKgg1tbSFXUqpDWmEStH4uQeWoX0W62rMeLti2phHDQPB6dVkAtNa4t/NX6MWCIyoZ2zXSgEAEwDp56yNoJJVKbLpU5+t5pDUNUYS0TzPRtTl6wUSnVyhxA16pCyY8NNQniqfAOXlb21rNrxFrYMRRRVmlGxmqjzO5YM9F9alZx+RAajBBlyAkQqw4mB4xRyMrNqhx62l6KNYJrGcBoM9KWdnmC1H1JbtTVwpDRyLJ8F+CtVY0paJ9FlOULR11FkyvMHWLSNSXKmtjIuYpRyYLkJhEOQVhpBiiXBQxClrYqmRzqDpSqoUNKKTOwzA99UOYMqsh6pzLQIu3OlBrZZV9hrcAl5Mo7FlGZ8/xkbQiDU2o8nS8RZu186CuI7Upr4q0JCaO9K+661Y7XVYil1nmtaFZKkON5fTXNQ5JGVGabTMO12lQgTd1l0aV+DsRI3VNRgF+J2++8vy9nfYz5R9jgnMYAr6fNmvRqWjRcW+iD38AohruO34uC97XlHBwvb4CRH6LsMf52Ok5qXoCWF5Z2PowBa7uLyDgaHsrkKghbxavnqg4dd8xXIbeOQskPp7RvcKYEbTV6yD2IMF34sNJgUV0qHgtslKBzgs5F4mr3SuMaIMi7H6hTqdjAELvv4SAbWj8ypZ1O//LlS81PtFP1WNZo7b7HcgLs6MerttTRQlxOmSwPuJ1MJuPM9XvBmdWChxTp1KknBntwT2jMijaLJ6ABpcUl0JC7u7tOi1CCadHFRflxWmKx8HXQqv/oGMBiNtsLj4MmKqYoJTzSsYGVCN+DXFWDaJCd/FMaAEM/P2tKyVqvAu4pWWsPwCQ/f/68XRcFZw+TC2mLdPzw8osgT1TGWzC/bk8IOiawkjoB8dEFRlixnxTlWMHrWK0UcK143ynKsYKNUhB/PH7TBv/euNCWTo7J5P4HjGzy6NWNlJwAAAAASUVORK5CYII=',
  an =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANlSURBVHgBzVi9ctpAEF6JxiWdx5WVNxAeF3SWu3R2myq8gSnTIbqUdpnOrjKpEspUyLVt0CPIFXShTIYB8i3eE8dxQsKAhm9GoPvb+7R7t7d7Dm2I8/PzYDqdXjmO489mMw9VntacoD5Bfey6buf5+TmiLeAU6eT7fhWTNfF6g6dKxZHgifAx7TiOE9oQzp5I2dDu9XrhJgMyyYGYB2JdWjYbwWQjmO4e2ojwH/f7/VdtjI+/U4y7Rr8A7Z4hNsG4y6JadDKI+UKsqpGK8BeCzCMVBMQ0QLBlkBwJwThvvJNHjDWFJ4SsO3onILIJmS1afGwhgo4hhE3Z14jxzrt8z2K2EPSgwa6mRSZYWyfbXSosa2xnxBgsh+WxXKnizdblTUd55M7OzkKSxS+m3BkxkyBeR1LFlrrJ6l/hH1H5T1UJAV8g6DftAcPhcHR8fPwP832UKh/lb6j/a/ada04WqyKWbLP4iwDyb2X3M6pZ2lNmDWhBLqQSgHnaWrFp6+PIWdmVAQn82AcqCVjnf0g2oLiWSG93+RBXBayDiMrFvXqBaa/MRpejC1UA0V9UIjB3etrAar7Z7krYo/BKJWIymaQnhOUcnm+ItLLIebdLGH7UM9tdOmAcPLlEFWq12imVCIn/FBKz3dUOYuuO2ScqlYqnzZ2Y7exK0k0AXxNQiQAh3ceubEZ2wh2t3KByEagXEF3xsa4cGSqEqWIZBFQCcHQ1aBGiJbbwX+3WW1XBMT+Vg5Y2Z2TrMCcH03KINJKOAb6qSXuEyPdUmfNaW795sMmB3snJyREt1kAdAeAPDgxpx5DA9jtej4QYJ08dW9/UCbP2LPG9RzsmZuYpINbO6p+SQ6eRJb7fGUFbki7zUS45ITjPyA2C/W3XII+XlNNbmtx1G+vGFc746e0GKXx5eXmgguAoG9pp8dWEqpPrDF1u5h3K2rsSIwlOSeLhe5IOPiB5enpKPXu9XvfG4zFfjV3Qm0NfyklVLozXzxgb5hHMvQIDyZYhaGNIHsy+9I7XdobcFYKVPMFwJ49wKw9sCkxQNUxShNRXvH7iPFjPTUXu3K9KVQB35gwGg0j1KXR5qANh1QUEXksE4+lmF1fEazPms7LIjdQ6DW5Mbh/IIphr1jKQZeKDIMewETwYcgydIJ+5/wFYW/TpXDoMoAAAAABJRU5ErkJggg==',
  cn =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgBtVZLUsJAEO0OaFmuuIHhBIJLyg/ZWIIL8QTGI3gCOQKcQG+gLKwswVLLnXID4AbZiR/S9owEyWQSJxZ5izB00/2mH9M9QcgIevDqYMEZzKiH+81b0ziEjKAnbwQENq98+Hwvo3Pqm8RZkAGyGkkigCUoblRMYzMRScmWgXQChshGBFBXvrtgCGOiqGwhsCTtqySKybbgMpPPiIheb0oQly2ES33pT4U83oveSKaqAGElJcuYn4NEv+g5mebRI8gV5P9IR3JHOfLgnOgLnPzIaCjyR0YQj5dLJmzDykAd3G1eiFVs1s374oo9NvwXQp0CuVhr3oem2PHGvcZASoloPJkVcPy0ukwi86ZFcHWjTJVxJbzRss6V3rCIRleACRIromfPhhmMICs2Axt3jieqObkiQuMrIII3y9WZk4kC8ysgAtLPRC2RlE3MN32mDmBQZdHbej/U6eVuSzUW9bmEbKTuVO2NIZ9KsY733LTQ4md32aSXLqCWYtH3RthzANd/xCdU9FuFDwVsY+2om/QTdBpj/jjn8TVejC+kWFtojzf1+T9ax234sCboHA7BEDJujQ74NaynvoZ9A1WXpcuUkbt/AAAAAElFTkSuQmCC',
  ln =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgBtVVNTsJQEP6mgmtuIO5cGC0nEE/g74KdeARPIDdQTqBLEwXhBnACiBDjjnIDgiuBvvFRrOnPezhN5EtI6XSmX2b6ffMIGcGXbhmKr0CqTY1BS1pHyAi+OBjpS1H/JvCdXWr1J5I6BxkQdLMiWaKA3MKV1mYiAuuRRaGcEwiRjQhcjt0SqhBCTJQYW4gCX+6XJfXyjpJjCyEcn0h1fOoWsKV6SHe0hEh9AdGvN+xUrs60K4zh6Vd17Czac0HexQFjs5iE38jDJsEhUX52vDEyRh9qdhwTA5/v34KcGv4LzPfUHNws/6ZUF/iCnQeYFSYk0NNhrtLroBuGjPLmyl4R8/ydfnyK7Cwd+J9n1PJicl/ro8imFnLAo+bbrumR80eh6AiQwNoRV1w9PjVCVvBWkZq9cTJs72iuxEdAHH7VFLUTsfwIiIESR8k6omBstt2mvQF/UQKrGsxMZT4v7SSjOWOuaWxpb/S157pGz5G/tEU9GrKMLukf7Q01LUUNGGS9DDur9cWPifyU/8wdQeFHkFreqkaNYR0W0NOHpy/Xen15kfWVsoV9M3zlD5Hzx/T83ocQq42yfQR/2k5uhm9CG7C+Nfr7TwAAAABJRU5ErkJggg==',
  dn =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN7SURBVHgB7ZyLkdowEIb/u6EAOkCpIHSAOjg6wB1AKrBTAUkF0MElFUAquKQCu4MkFXBabM2Axys/JGSJ45vZ8+D3/pJW8sq+J9yeqTKpbKZsXtn0wjT/lBXV8ndlf6pllJCjmbKDspOl/VW2U7ZCBFCpruHG8TZBBAKDnM9Q3uDJowUjhlSWw6/zwYhBpf+KcZ2/tBwWMeMJ/ZHor36h7Igy0hfV8j/KnkAzq86pe5N5tezDN2Vfa+d1zgb9gliK0rmhkCAvKEXvUysEbkTW8SYOyhZwj0ApRo6RhMg6XvgWztcR6FYznAqRdbjgFtejPx8ItNcKJ0JkCKP0OUj4LdrvcXABSXhQ2REp2uNUbwTMVS0kATRtQmzQkx3iEkDTJsS864kSxCmAxiTEoetJTM1ggTggZwc3i8RwcIp4EOCfamm9sbfgakGO+DAN8dkCTQwHrRAnXLNgC/UNlsEkQCT4gpX1nQXurxZouNrwWt8xxf3EgjqU9+wUILmmsEb8kKNcTyEvd+KaQucRVuDs0OzfVu8gcb9NQZOg2UdqAXgGPwqMduangSOzXtAfEmHe88AYKdCcfKVQMHsGP4S8p5pAFMz6+QT8UyGlr+vqkTA/EW4toQJdoazdorZNGI5hewaT5QhrEEWOcD1Am52HAScL22J8qNSpUIb6kAJ2IpDtMB4C9hPB6TPsSTAgf+cAagIHOEj1uxCBoCrle96BhBdwwMSwTdZ+f0LprGjYV0fl7/CHKTDvlf3Ade+WVNYI11aaIGdDyDtItET7BlI4igmk7Bdmm8+Hrc/M+iMG1MYhMeHIrPcZE7hrHTEAV4Exah4i4CHCmYcIeIhw5iECHiKcIRG4d/5kz/U3fXew47UkeEzb2BkaGh7XByX0O0fYw+ZVw/6tk7NrtGeQZLVf3vPit8SUR9hV97xEe8bpLMIU9okJEkfALyns7vlKBGIDuxONMV1napqDRCD2A08yZp6Rnlyt02v1k24RjwAaJ4nWOgm6vS67RDgIWKTcTd87LFA6qpMl+ms1Slv9QpgIlL0CfR6gu/cC5aTREs1jhQQfCK52L/BBEOCbg+8s+Whw32ud30+YIEwk3FRTKmXTt1R7BEoG+wFQVxMIEAF/AqQIFAk/ArwhYExv0rmyAyLoEWwf5jijZ4zGB70hX8j6gCL6C9xQoOX/MLwDomnC/jzse2YAAAAASUVORK5CYII=',
  un =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAA2CAYAAABgMA/LAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADLSURBVHgB7dmxDcIwEEbhC2koKTMCZTZDlHQuKTNCVmEDj+GOjMBZSJAGxbJdHPH7JCv9r9jN60SN4+j0c9FzEqwtembv/bXTkSZ5j4TfXBzqKfxJW5aDIEkcahJsmfsQwmMYhnj1znqOgrX4mN/1Mb8JAAAAAAAAAPytTgo00AO/XU8yNdYDXclQLfVAul6qkqFa6oFzL5ka6YF0PQAAAAAAAAA7UNT1ajPYCcu7Xm3GO6GzNJTlTkjXS2VpKMudML/r1Wa0E3663gvhCDx/4CktcwAAAABJRU5ErkJggg==',
  st = '/assets/items_banner-C2JioAjp.jpg',
  fn = '/assets/contact_img-CyOum2vk.png',
  pn = '/assets/razorpay_logo-DrY6yMWi.png',
  mn =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAmCAYAAABedGw2AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAj1SURBVHgB7VppbFTXFf7ubLbxBgZTCq6jxpVoIUqgTYQIqmOlSUppg0KCg/FCjG3coAa1UFVVpTQuUZUfVaWmbUoTjJdgsJO6FLrJKT8il1TQJKURjUgIi2lrXCu4DsZ4neWdfHdmPJp588a7wzjxJz29d7dz7z333HPOPfcBc5jDCERE6QdxjLge3Agq8yXd68AKpZDL5F0c9QpfP+6uP6Z6EKdwIM6xo1j2eA38lEyNEAK7EzbEMWaEsaWlkugysNbtQWd9kzqHKcAQpJiZOhswLYzNzxdXigubOPsvKcFa5cFdPiDBZsNOFk+JsbMV08LY5GTMU248S8laomVLgvlMC6Yf/2UXJ64Dg4hjzKiONYypM1YMnOViPcOd8JqRiNN1daoLswBjMrayUpzz3Ej+wIDd54OnowMDra3KG16np+ffyJiXza9IeyKTlNi8PHG0toLaREltkzrCrCOYJHbvlqTeXiRJFzy1f1A3MAmUbZRU73y4EgfhfeE36FVKjTkvS6NAZs6TftxDa7yZevIOZi0iJScrD/C7m60uUxpPJdjx0vMN6up3SmX+DS/eJRuXmEidYN75kQQZ/UbtYVVdVihFpJUXXnFIYW+iYClpf5PJ5eyvzzOAba5ErGHeRvMYez3Y3dys+sqK5CektThUYMDtceIHDgNZ/N6BgIuWwUcz9T27gcb9jWgeizklJZLM8TzkEzxiE3zBUEglrSG2ahfuHub96kCTej9W+yiJ3VUkWYP9aGCvebYwAQxbgc+RWWtsCgVuHzYwvX7YzWJr5yc3OLERJPCpJq11zK8Ir8hJ6AWr5OeCYH8elQon5XY1kxVmwmnA9/Wb43iYE80JFXAc9EjSmfcgiSSZmn3esGFjRTG2U3gK9u9X12GBihL5LFVQi8EF1vPWRxH//ANLkUPbkce8neXFUlJzSL1iRSOCHZUlkk2RfEVM0jQKXKEvmaJLpPyMWoBpAJn6KF9JMXuiMPhu4Eh5uWSYC8sLZDUl/Q1+LsfoWMQ5/7m0UB62KoxgLH3GJ/haiU8CbPiKGsKPwrN2FsoC2FEvmmnjpGJXeKGyWD4dTT6I3fmSRNF/LAaBDnZ2hu82PsOYPdA24X2BtRHV8y2i6htJDyt8l6/bLaq+xspPc/u/xN1gdvMW+QzsMTcIMXYoBYuomBdGkRQ8V3NYZdHorOI7x+fEfG6mrzH/CN/9ugpPWNZqwMC3EtxIHXmSM2hMRoPyG5gqSsE3aDQKHD3oxeRwjUzYfKkD6RzzEo5jHfMuRneHtCTlP8Rg2zZZqCx0ORn5FGnk1jSpqtpDais5VsBsdwQdhcd37ZKE8LyQ8SJzdIE9irBN61G/+vaven09NxD1sH605cQoYKvhfbTcGB/cNg/urH5ZnQ/PLC+alMd2nEwIuWh02U5tL5YttORvwqT+SH0TT45P2X1Yy+/FJgkZGL6Gn4dnfCYHf7pyEW/xc00YjZShD3AvP1tG8kKdGE5oC9lvGqBmZ2VZEY5XFEmxjgGElzU0qED9NEwZHNywmalToBW1g+oOqX9Sslqj6gqWcfjp9IBWKXM7wZnDLSpi1+zdq2iKcMpMh073HeHpkMRmZ6P7ygWcJOn7zY3Y230kdp/djV/Qxfib8uFJ+nD/gmky8R4p4RiP8nVveB7HnKISkU51cVvU3lC4kzvGyiVLtCCeFZ4MSaxeCZuDXoFCbKlRdIfoH1I9vFlRKNXb8yVTZ3s88RV9kliunxeXLXJtFME0tviURZkTgf1oflzmipSqiH0boW+qD6rzXrvf6f+d6GHEhov6s8LmwkF9ZEScIWag1qF3rEV9n76UiLYvE4JEdhs1hhdfVJeyOrCFK/AgnzoyeLQo/Vev/x9bUhFfkBjxW2UgO6quQHwKfWzRY1WGgAcw5sOKQ+FtLYMwewNBFr/lL31I9jhSsJGdPM30LeaxUjdt5lr/EbMAVGEPmD1aCk//oIHeJMEl82qw7Cpdv9XjIA3vDUR4PyHGVlWJ7col3JqVgzatb0fyg/dKB3nv9HtfAkN4tKKRo0X2gJvxWIuNZB//CWZ6YaFjywpkKV/3W9Tu8HpxTbnwtkXZYsOHTLOhHg9CqqCzk5ZO8Gr7RRyi5V8fdUxbgAEVfeqAssGr5sGnLE43jAhtyA8aOI0qk7s2U6Ck3bajUFaxb/9y001cohx4GRLtGFKCWhkl8/HgcxLRak9Ryvc9tlUsj/mkn1JZJA+UbZVHzGUO04AS2PlW/ZBTXXQ1zjGv09Ax636sIOdyED2y/7S14WrOsmgfmMhNc+Et0jmrTzntHn9w49uYeSynnv17qgtn2Xc/teBKynCGRT1hGHGf/uDB5xzrnuCnOUS5zmHDX8sL5XXO4TKFxcODRgbfS5nO8Wn1qPAcTDHj2IFugZa0TAl621bnH79yt+GoDnznFMppVrzVoppWHcuC7S/gIwL7S+C4v+hPqJiVjlY34u0DTYGkzY7viQ93WwRhFpLGBgmSEjX2fwNTu0JWOJbczS0G/wntx/DvrNkBMqndbceT4QFv7W4ygP84YO2WTQQhxiZf8/ty4z2Y65rHeAwu+2WL8ke7tILnEJ+YAI2ZhI5qxWYObwG4nTfxSP6uuUhfBTEY/nXW+R/GBz3fqJuEEGN/1qwGGYFaRcboCM9xBK4yzCSuK314MJBb06g2US9FKPsDjerXHNQ93CqvIlJ7aHZfUAEXTqONdU6GPyx/HRagjm8319XPkCv2AYZzaOG2Xs8BnDQVdbKfH3b1YSXHejpW+7oG9Rde/axg3W3clf9A9E7Ui/YO5/MsjdvttY3qmahxxyKu3S9eHGa63UjXYS+nDb2Zt+BquCs2GgoZNHY4kGm3w+vsQ/f+ZutrkKmiolguRlzNwL+iv2WYM19/+4PX9GlkEH3PH0XXSJRuIqD1T0p3YaHNi4ShBAwxYNMdjPLFxKz7w8QMK8aSs83cUY/iJiKu/3+aLOLBgn4sGTtDf+BMCB9Lxorp6uRmIO5/4xwLErDQ79FYnGFc9R1+n/AOMqZxkzHrGetU+LK7F4M1k/x9aA5zmIPGh+sBUp3Dt4WYAAAAAElFTkSuQmCC',
  hn =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFkSURBVHgBpdW/ToNAHAfwO64QR8Zu4ubIn8VRRyd1dJIESBjxCazvAQm+Qd9ANjeY3Tp2NCwMBPD3S0BJS487+k2a3pVfP/lxHEAJJAgCs+s6PY7jjJyRKIr0siwfNU3LGKJt2xbwu+s4Ds3zPCMLEoahUVXVF6XUBc9UoNPL4SCM33zf3xDJIFrX9ScMjd7RGXT4bdv2FczNvu5WpvMJdAcd3zOcFEWxXYKfQO/SNN2xoUgW56E4Z+NiUXwOPYJFcBEUQ8mJeJ6XwtfLXyGl76vVKhVBufAUDvmBjz6HYhgPnliWCxEUo5CZqKq66Tv9/5OibHnobMejC7U+OHQzt8+ZAGrgHE8fLmAGw+u+hLvPFVEU1zRJkieYfgx1vGcLE0WHNRW9iZgMOkQEZ7KoKM6WoCI4XYqOc3iHgvGqNE2jn4NiYLe4ZLRbYFs+4Btkb1mWDpM9oM+y6BBcFnRguMYH1i/jdovSfDk2aAAAAABJRU5ErkJggg==',
  q = {
    logo: Zr,
    hero_img: $r,
    cart_icon: en,
    dropdown_icon: rn,
    exchange_icon: nn,
    profile_icon: sn,
    quality_icon: on,
    search_icon: an,
    star_dull_icon: cn,
    star_icon: ln,
    bin_icon: tn,
    support_img: dn,
    menu_icon: un,
    about_img: st,
    about_food: st,
    contact_img: fn,
    razorpay_logo: pn,
    stripe_logo: mn,
    cross_icon: hn,
    items_banner: st,
  },
  gn = () =>
    o.jsxs('div', {
      className: 'flex flex-col sm:flex-row border border-gray-400',
      children: [
        o.jsx('div', {
          className:
            'w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0',
          children: o.jsxs('div', {
            className: 'text-[#414141]',
            children: [
              o.jsxs('div', {
                className: 'flex items-center gap-2',
                children: [
                  o.jsx('p', { className: 'w-8 md:w-11 h-[2px] bg-[#414141]' }),
                  o.jsx('p', {
                    className: ' font-medium text-sm md:text-base',
                    children: 'ORDER TAKEAWAY ONLINE',
                  }),
                ],
              }),
              o.jsx('h1', {
                className:
                  'prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed',
                children: 'Get Exclusives',
              }),
              o.jsxs('div', {
                className: 'flex items-center gap-2',
                children: [
                  o.jsx('p', {
                    className: 'font-semibold text-sm md:text-base',
                    children: 'SHOP NOW',
                  }),
                  o.jsx('p', { className: 'w-8 md:w-11 h-[1px] bg-[#414141]' }),
                ],
              }),
            ],
          }),
        }),
        o.jsx('img', {
          className: 'w-full sm:w-1/2 h-1/2',
          src: q.hero_img,
          alt: 'DammyKitchen',
        }),
      ],
    });
function $t(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = $t(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function de() {
  for (var e, t, n = 0, r = '', s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = $t(e)) && (r && (r += ' '), (r += t));
  return r;
}
const Oe = (e) => typeof e == 'number' && !isNaN(e),
  he = (e) => typeof e == 'string',
  V = (e) => typeof e == 'function',
  Fe = (e) => (he(e) || V(e) ? e : null),
  ft = (e) => b.isValidElement(e) || he(e) || V(e) || Oe(e);
function xn(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: s } = e;
  requestAnimationFrame(() => {
    (s.minHeight = 'initial'),
      (s.height = r + 'px'),
      (s.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (s.height = '0'), (s.padding = '0'), (s.margin = '0'), setTimeout(t, n);
      });
  });
}
function Je(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: s = !0,
    collapseDuration: a = 300,
  } = e;
  return function (i) {
    let {
      children: c,
      position: l,
      preventExitTransition: u,
      done: d,
      nodeRef: p,
      isIn: x,
      playToast: A,
    } = i;
    const m = r ? `${t}--${l}` : t,
      g = r ? `${n}--${l}` : n,
      f = b.useRef(0);
    return (
      b.useLayoutEffect(() => {
        const y = p.current,
          w = m.split(' '),
          E = (j) => {
            j.target === p.current &&
              (A(),
              y.removeEventListener('animationend', E),
              y.removeEventListener('animationcancel', E),
              f.current === 0 &&
                j.type !== 'animationcancel' &&
                y.classList.remove(...w));
          };
        y.classList.add(...w),
          y.addEventListener('animationend', E),
          y.addEventListener('animationcancel', E);
      }, []),
      b.useEffect(() => {
        const y = p.current,
          w = () => {
            y.removeEventListener('animationend', w), s ? xn(y, d, a) : d();
          };
        x ||
          (u
            ? w()
            : ((f.current = 1),
              (y.className += ` ${g}`),
              y.addEventListener('animationend', w)));
      }, [x]),
      O.createElement(O.Fragment, null, c)
    );
  };
}
function Ot(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const _ = new Map();
let Le = [];
const pt = new Set(),
  An = (e) => pt.forEach((t) => t(e)),
  er = () => _.size > 0;
function tr(e, t) {
  var n;
  if (t) return !((n = _.get(t)) == null || !n.isToastActive(e));
  let r = !1;
  return (
    _.forEach((s) => {
      s.isToastActive(e) && (r = !0);
    }),
    r
  );
}
function rr(e, t) {
  ft(e) &&
    (er() || Le.push({ content: e, options: t }),
    _.forEach((n) => {
      n.buildToast(e, t);
    }));
}
function Lt(e, t) {
  _.forEach((n) => {
    t != null && t != null && t.containerId
      ? t?.containerId === n.id && n.toggle(e, t?.id)
      : n.toggle(e, t?.id);
  });
}
function yn(e) {
  const {
    subscribe: t,
    getSnapshot: n,
    setProps: r,
  } = b.useRef(
    (function (a) {
      const i = a.containerId || 1;
      return {
        subscribe(c) {
          const l = (function (d, p, x) {
            let A = 1,
              m = 0,
              g = [],
              f = [],
              y = [],
              w = p;
            const E = new Map(),
              j = new Set(),
              R = () => {
                (y = Array.from(E.values())), j.forEach((v) => v());
              },
              P = (v) => {
                (f = v == null ? [] : f.filter((T) => T !== v)), R();
              },
              L = (v) => {
                const {
                    toastId: T,
                    onOpen: I,
                    updateId: D,
                    children: M,
                  } = v.props,
                  H = D == null;
                v.staleId && E.delete(v.staleId),
                  E.set(T, v),
                  (f = [...f, v.props.toastId].filter((F) => F !== v.staleId)),
                  R(),
                  x(Ot(v, H ? 'added' : 'updated')),
                  H && V(I) && I(b.isValidElement(M) && M.props);
              };
            return {
              id: d,
              props: w,
              observe: (v) => (j.add(v), () => j.delete(v)),
              toggle: (v, T) => {
                E.forEach((I) => {
                  (T != null && T !== I.props.toastId) ||
                    (V(I.toggle) && I.toggle(v));
                });
              },
              removeToast: P,
              toasts: E,
              clearQueue: () => {
                (m -= g.length), (g = []);
              },
              buildToast: (v, T) => {
                if (
                  ((re) => {
                    let { containerId: G, toastId: $, updateId: ne } = re;
                    const fe = G ? G !== d : d !== 1,
                      Te = E.has($) && ne == null;
                    return fe || Te;
                  })(T)
                )
                  return;
                const {
                    toastId: I,
                    updateId: D,
                    data: M,
                    staleId: H,
                    delay: F,
                  } = T,
                  z = () => {
                    P(I);
                  },
                  W = D == null;
                W && m++;
                const ae = {
                  ...w,
                  style: w.toastStyle,
                  key: A++,
                  ...Object.fromEntries(
                    Object.entries(T).filter((re) => {
                      let [G, $] = re;
                      return $ != null;
                    })
                  ),
                  toastId: I,
                  updateId: D,
                  data: M,
                  closeToast: z,
                  isIn: !1,
                  className: Fe(T.className || w.toastClassName),
                  bodyClassName: Fe(T.bodyClassName || w.bodyClassName),
                  progressClassName: Fe(
                    T.progressClassName || w.progressClassName
                  ),
                  autoClose:
                    !T.isLoading &&
                    ((ce = T.autoClose),
                    (ye = w.autoClose),
                    ce === !1 || (Oe(ce) && ce > 0) ? ce : ye),
                  deleteToast() {
                    const re = E.get(I),
                      { onClose: G, children: $ } = re.props;
                    V(G) && G(b.isValidElement($) && $.props),
                      x(Ot(re, 'removed')),
                      E.delete(I),
                      m--,
                      m < 0 && (m = 0),
                      g.length > 0 ? L(g.shift()) : R();
                  },
                };
                var ce, ye;
                (ae.closeButton = w.closeButton),
                  T.closeButton === !1 || ft(T.closeButton)
                    ? (ae.closeButton = T.closeButton)
                    : T.closeButton === !0 &&
                      (ae.closeButton = !ft(w.closeButton) || w.closeButton);
                let be = v;
                b.isValidElement(v) && !he(v.type)
                  ? (be = b.cloneElement(v, {
                      closeToast: z,
                      toastProps: ae,
                      data: M,
                    }))
                  : V(v) &&
                    (be = v({ closeToast: z, toastProps: ae, data: M }));
                const ue = { content: be, props: ae, staleId: H };
                w.limit && w.limit > 0 && m > w.limit && W
                  ? g.push(ue)
                  : Oe(F)
                  ? setTimeout(() => {
                      L(ue);
                    }, F)
                  : L(ue);
              },
              setProps(v) {
                w = v;
              },
              setToggle: (v, T) => {
                E.get(v).toggle = T;
              },
              isToastActive: (v) => f.some((T) => T === v),
              getSnapshot: () => y,
            };
          })(i, a, An);
          _.set(i, l);
          const u = l.observe(c);
          return (
            Le.forEach((d) => rr(d.content, d.options)),
            (Le = []),
            () => {
              u(), _.delete(i);
            }
          );
        },
        setProps(c) {
          var l;
          (l = _.get(i)) == null || l.setProps(c);
        },
        getSnapshot() {
          var c;
          return (c = _.get(i)) == null ? void 0 : c.getSnapshot();
        },
      };
    })(e)
  ).current;
  r(e);
  const s = b.useSyncExternalStore(t, n, n);
  return {
    getToastToRender: function (a) {
      if (!s) return [];
      const i = new Map();
      return (
        e.newestOnTop && s.reverse(),
        s.forEach((c) => {
          const { position: l } = c.props;
          i.has(l) || i.set(l, []), i.get(l).push(c);
        }),
        Array.from(i, (c) => a(c[0], c[1]))
      );
    },
    isToastActive: tr,
    count: s?.length,
  };
}
function bn(e) {
  const [t, n] = b.useState(!1),
    [r, s] = b.useState(!1),
    a = b.useRef(null),
    i = b.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: c,
      pauseOnHover: l,
      closeToast: u,
      onClick: d,
      closeOnClick: p,
    } = e;
  var x, A;
  function m() {
    n(!0);
  }
  function g() {
    n(!1);
  }
  function f(E) {
    const j = a.current;
    i.canDrag &&
      j &&
      ((i.didMove = !0),
      t && g(),
      (i.delta =
        e.draggableDirection === 'x'
          ? E.clientX - i.start
          : E.clientY - i.start),
      i.start !== E.clientX && (i.canCloseOnClick = !1),
      (j.style.transform = `translate3d(${
        e.draggableDirection === 'x'
          ? `${i.delta}px, var(--y)`
          : `0, calc(${i.delta}px + var(--y))`
      },0)`),
      (j.style.opacity = '' + (1 - Math.abs(i.delta / i.removalDistance))));
  }
  function y() {
    document.removeEventListener('pointermove', f),
      document.removeEventListener('pointerup', y);
    const E = a.current;
    if (i.canDrag && i.didMove && E) {
      if (((i.canDrag = !1), Math.abs(i.delta) > i.removalDistance))
        return s(!0), e.closeToast(), void e.collapseAll();
      (E.style.transition = 'transform 0.2s, opacity 0.2s'),
        E.style.removeProperty('transform'),
        E.style.removeProperty('opacity');
    }
  }
  (A = _.get(
    (x = { id: e.toastId, containerId: e.containerId, fn: n }).containerId || 1
  )) == null || A.setToggle(x.id, x.fn),
    b.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          document.hasFocus() || g(),
          window.addEventListener('focus', m),
          window.addEventListener('blur', g),
          () => {
            window.removeEventListener('focus', m),
              window.removeEventListener('blur', g);
          }
        );
    }, [e.pauseOnFocusLoss]);
  const w = {
    onPointerDown: function (E) {
      if (e.draggable === !0 || e.draggable === E.pointerType) {
        (i.didMove = !1),
          document.addEventListener('pointermove', f),
          document.addEventListener('pointerup', y);
        const j = a.current;
        (i.canCloseOnClick = !0),
          (i.canDrag = !0),
          (j.style.transition = 'none'),
          e.draggableDirection === 'x'
            ? ((i.start = E.clientX),
              (i.removalDistance = j.offsetWidth * (e.draggablePercent / 100)))
            : ((i.start = E.clientY),
              (i.removalDistance =
                (j.offsetHeight *
                  (e.draggablePercent === 80
                    ? 1.5 * e.draggablePercent
                    : e.draggablePercent)) /
                100));
      }
    },
    onPointerUp: function (E) {
      const {
        top: j,
        bottom: R,
        left: P,
        right: L,
      } = a.current.getBoundingClientRect();
      E.nativeEvent.type !== 'touchend' &&
      e.pauseOnHover &&
      E.clientX >= P &&
      E.clientX <= L &&
      E.clientY >= j &&
      E.clientY <= R
        ? g()
        : m();
    },
  };
  return (
    c && l && ((w.onMouseEnter = g), e.stacked || (w.onMouseLeave = m)),
    p &&
      (w.onClick = (E) => {
        d && d(E), i.canCloseOnClick && u();
      }),
    {
      playToast: m,
      pauseToast: g,
      isRunning: t,
      preventExitTransition: r,
      toastRef: a,
      eventHandlers: w,
    }
  );
}
function wn(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: s = 'default',
    hide: a,
    className: i,
    style: c,
    controlledProgress: l,
    progress: u,
    rtl: d,
    isIn: p,
    theme: x,
  } = e;
  const A = a || (l && u === 0),
    m = {
      ...c,
      animationDuration: `${t}ms`,
      animationPlayState: n ? 'running' : 'paused',
    };
  l && (m.transform = `scaleX(${u})`);
  const g = de(
      'Toastify__progress-bar',
      l
        ? 'Toastify__progress-bar--controlled'
        : 'Toastify__progress-bar--animated',
      `Toastify__progress-bar-theme--${x}`,
      `Toastify__progress-bar--${s}`,
      { 'Toastify__progress-bar--rtl': d }
    ),
    f = V(i) ? i({ rtl: d, type: s, defaultClassName: g }) : de(g, i),
    y = {
      [l && u >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
        l && u < 1
          ? null
          : () => {
              p && r();
            },
    };
  return O.createElement(
    'div',
    { className: 'Toastify__progress-bar--wrp', 'data-hidden': A },
    O.createElement('div', {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${x} Toastify__progress-bar--${s}`,
    }),
    O.createElement('div', {
      role: 'progressbar',
      'aria-hidden': A ? 'true' : 'false',
      'aria-label': 'notification timer',
      className: f,
      style: m,
      ...y,
    })
  );
}
let En = 1;
const nr = () => '' + En++;
function vn(e) {
  return e && (he(e.toastId) || Oe(e.toastId)) ? e.toastId : nr();
}
function Re(e, t) {
  return rr(e, t), t.toastId;
}
function Qe(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: vn(t) };
}
function Ue(e) {
  return (t, n) => Re(t, Qe(e, n));
}
function N(e, t) {
  return Re(e, Qe('default', t));
}
(N.loading = (e, t) =>
  Re(
    e,
    Qe('default', {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (N.promise = function (e, t, n) {
    let r,
      { pending: s, error: a, success: i } = t;
    s && (r = he(s) ? N.loading(s, n) : N.loading(s.render, { ...n, ...s }));
    const c = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      l = (d, p, x) => {
        if (p == null) return void N.dismiss(r);
        const A = { type: d, ...c, ...n, data: x },
          m = he(p) ? { render: p } : p;
        return r ? N.update(r, { ...A, ...m }) : N(m.render, { ...A, ...m }), x;
      },
      u = V(e) ? e() : e;
    return u.then((d) => l('success', i, d)).catch((d) => l('error', a, d)), u;
  }),
  (N.success = Ue('success')),
  (N.info = Ue('info')),
  (N.error = Ue('error')),
  (N.warning = Ue('warning')),
  (N.warn = N.warning),
  (N.dark = (e, t) => Re(e, Qe('default', { theme: 'dark', ...t }))),
  (N.dismiss = function (e) {
    (function (t) {
      var n;
      if (er()) {
        if (t == null || he((n = t)) || Oe(n))
          _.forEach((r) => {
            r.removeToast(t);
          });
        else if (t && ('containerId' in t || 'id' in t)) {
          const r = _.get(t.containerId);
          r
            ? r.removeToast(t.id)
            : _.forEach((s) => {
                s.removeToast(t.id);
              });
        }
      } else Le = Le.filter((r) => t != null && r.options.toastId !== t);
    })(e);
  }),
  (N.clearWaitingQueue = function (e) {
    e === void 0 && (e = {}),
      _.forEach((t) => {
        !t.props.limit ||
          (e.containerId && t.id !== e.containerId) ||
          t.clearQueue();
      });
  }),
  (N.isActive = tr),
  (N.update = function (e, t) {
    t === void 0 && (t = {});
    const n = ((r, s) => {
      var a;
      let { containerId: i } = s;
      return (a = _.get(i || 1)) == null ? void 0 : a.toasts.get(r);
    })(e, t);
    if (n) {
      const { props: r, content: s } = n,
        a = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: nr() };
      a.toastId !== e && (a.staleId = e);
      const i = a.render || s;
      delete a.render, Re(i, a);
    }
  }),
  (N.done = (e) => {
    N.update(e, { progress: 1 });
  }),
  (N.onChange = function (e) {
    return (
      pt.add(e),
      () => {
        pt.delete(e);
      }
    );
  }),
  (N.play = (e) => Lt(!0, e)),
  (N.pause = (e) => Lt(!1, e));
const jn = typeof window < 'u' ? b.useLayoutEffect : b.useEffect,
  De = (e) => {
    let { theme: t, type: n, isLoading: r, ...s } = e;
    return O.createElement('svg', {
      viewBox: '0 0 24 24',
      width: '100%',
      height: '100%',
      fill:
        t === 'colored' ? 'currentColor' : `var(--toastify-icon-color-${n})`,
      ...s,
    });
  },
  ot = {
    info: function (e) {
      return O.createElement(
        De,
        { ...e },
        O.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z',
        })
      );
    },
    warning: function (e) {
      return O.createElement(
        De,
        { ...e },
        O.createElement('path', {
          d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z',
        })
      );
    },
    success: function (e) {
      return O.createElement(
        De,
        { ...e },
        O.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z',
        })
      );
    },
    error: function (e) {
      return O.createElement(
        De,
        { ...e },
        O.createElement('path', {
          d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z',
        })
      );
    },
    spinner: function () {
      return O.createElement('div', { className: 'Toastify__spinner' });
    },
  },
  Tn = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: s,
        playToast: a,
      } = bn(e),
      {
        closeButton: i,
        children: c,
        autoClose: l,
        onClick: u,
        type: d,
        hideProgressBar: p,
        closeToast: x,
        transition: A,
        position: m,
        className: g,
        style: f,
        bodyClassName: y,
        bodyStyle: w,
        progressClassName: E,
        progressStyle: j,
        updateId: R,
        role: P,
        progress: L,
        rtl: v,
        toastId: T,
        deleteToast: I,
        isIn: D,
        isLoading: M,
        closeOnClick: H,
        theme: F,
      } = e,
      z = de(
        'Toastify__toast',
        `Toastify__toast-theme--${F}`,
        `Toastify__toast--${d}`,
        { 'Toastify__toast--rtl': v },
        { 'Toastify__toast--close-on-click': H }
      ),
      W = V(g)
        ? g({ rtl: v, position: m, type: d, defaultClassName: z })
        : de(z, g),
      ae = (function (ue) {
        let { theme: re, type: G, isLoading: $, icon: ne } = ue,
          fe = null;
        const Te = { theme: re, type: G };
        return (
          ne === !1 ||
            (V(ne)
              ? (fe = ne({ ...Te, isLoading: $ }))
              : b.isValidElement(ne)
              ? (fe = b.cloneElement(ne, Te))
              : $
              ? (fe = ot.spinner())
              : ((Fr) => Fr in ot)(G) && (fe = ot[G](Te))),
          fe
        );
      })(e),
      ce = !!L || !l,
      ye = { closeToast: x, type: d, theme: F };
    let be = null;
    return (
      i === !1 ||
        (be = V(i)
          ? i(ye)
          : b.isValidElement(i)
          ? b.cloneElement(i, ye)
          : (function (ue) {
              let { closeToast: re, theme: G, ariaLabel: $ = 'close' } = ue;
              return O.createElement(
                'button',
                {
                  className: `Toastify__close-button Toastify__close-button--${G}`,
                  type: 'button',
                  onClick: (ne) => {
                    ne.stopPropagation(), re(ne);
                  },
                  'aria-label': $,
                },
                O.createElement(
                  'svg',
                  { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
                  O.createElement('path', {
                    fillRule: 'evenodd',
                    d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z',
                  })
                )
              );
            })(ye)),
      O.createElement(
        A,
        {
          isIn: D,
          done: I,
          position: m,
          preventExitTransition: n,
          nodeRef: r,
          playToast: a,
        },
        O.createElement(
          'div',
          {
            id: T,
            onClick: u,
            'data-in': D,
            className: W,
            ...s,
            style: f,
            ref: r,
          },
          O.createElement(
            'div',
            {
              ...(D && { role: P }),
              className: V(y) ? y({ type: d }) : de('Toastify__toast-body', y),
              style: w,
            },
            ae != null &&
              O.createElement(
                'div',
                {
                  className: de('Toastify__toast-icon', {
                    'Toastify--animate-icon Toastify__zoom-enter': !M,
                  }),
                },
                ae
              ),
            O.createElement('div', null, c)
          ),
          be,
          O.createElement(wn, {
            ...(R && !ce ? { key: `pb-${R}` } : {}),
            rtl: v,
            theme: F,
            delay: l,
            isRunning: t,
            isIn: D,
            closeToast: x,
            hide: p,
            type: d,
            style: j,
            className: E,
            controlledProgress: ce,
            progress: L || 0,
          })
        )
      )
    );
  },
  We = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  Nn = Je(We('bounce', !0));
Je(We('slide', !0));
Je(We('zoom'));
Je(We('flip'));
const Cn = {
  position: 'top-right',
  transition: Nn,
  autoClose: 5e3,
  closeButton: !0,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  draggable: 'touch',
  draggablePercent: 80,
  draggableDirection: 'x',
  role: 'alert',
  theme: 'light',
};
function Sn(e) {
  let t = { ...Cn, ...e };
  const n = e.stacked,
    [r, s] = b.useState(!0),
    a = b.useRef(null),
    { getToastToRender: i, isToastActive: c, count: l } = yn(t),
    { className: u, style: d, rtl: p, containerId: x } = t;
  function A(g) {
    const f = de(
      'Toastify__toast-container',
      `Toastify__toast-container--${g}`,
      { 'Toastify__toast-container--rtl': p }
    );
    return V(u)
      ? u({ position: g, rtl: p, defaultClassName: f })
      : de(f, Fe(u));
  }
  function m() {
    n && (s(!0), N.play());
  }
  return (
    jn(() => {
      if (n) {
        var g;
        const f = a.current.querySelectorAll('[data-in="true"]'),
          y = 12,
          w = (g = t.position) == null ? void 0 : g.includes('top');
        let E = 0,
          j = 0;
        Array.from(f)
          .reverse()
          .forEach((R, P) => {
            const L = R;
            L.classList.add('Toastify__toast--stacked'),
              P > 0 && (L.dataset.collapsed = `${r}`),
              L.dataset.pos || (L.dataset.pos = w ? 'top' : 'bot');
            const v = E * (r ? 0.2 : 1) + (r ? 0 : y * P);
            L.style.setProperty('--y', `${w ? v : -1 * v}px`),
              L.style.setProperty('--g', `${y}`),
              L.style.setProperty('--s', '' + (1 - (r ? j : 0))),
              (E += L.offsetHeight),
              (j += 0.025);
          });
      }
    }, [r, l, n]),
    O.createElement(
      'div',
      {
        ref: a,
        className: 'Toastify',
        id: x,
        onMouseEnter: () => {
          n && (s(!1), N.pause());
        },
        onMouseLeave: m,
      },
      i((g, f) => {
        const y = f.length ? { ...d } : { ...d, pointerEvents: 'none' };
        return O.createElement(
          'div',
          { className: A(g), style: y, key: `container-${g}` },
          f.map((w) => {
            let { content: E, props: j } = w;
            return O.createElement(
              Tn,
              {
                ...j,
                stacked: n,
                collapseAll: m,
                isIn: c(j.toastId, j.containerId),
                style: j.style,
                key: `toast-${j.key}`,
              },
              E
            );
          })
        );
      })
    )
  );
}
function sr(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Rn } = Object.prototype,
  { getPrototypeOf: jt } = Object,
  Ge = ((e) => (t) => {
    const n = Rn.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  te = (e) => ((e = e.toLowerCase()), (t) => Ge(t) === e),
  Ze = (e) => (t) => typeof t === e,
  { isArray: ve } = Array,
  ke = Ze('undefined');
function On(e) {
  return (
    e !== null &&
    !ke(e) &&
    e.constructor !== null &&
    !ke(e.constructor) &&
    J(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const or = te('ArrayBuffer');
function Ln(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && or(e.buffer)),
    t
  );
}
const kn = Ze('string'),
  J = Ze('function'),
  ar = Ze('number'),
  $e = (e) => e !== null && typeof e == 'object',
  Pn = (e) => e === !0 || e === !1,
  Me = (e) => {
    if (Ge(e) !== 'object') return !1;
    const t = jt(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  In = te('Date'),
  Bn = te('File'),
  Un = te('Blob'),
  Dn = te('FileList'),
  Fn = (e) => $e(e) && J(e.pipe),
  Mn = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (J(e.append) &&
          ((t = Ge(e)) === 'formdata' ||
            (t === 'object' &&
              J(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  Hn = te('URLSearchParams'),
  [qn, zn, Qn, Kn] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    te
  ),
  _n = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Ie(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, s;
  if ((typeof e != 'object' && (e = [e]), ve(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = a.length;
    let c;
    for (r = 0; r < i; r++) (c = a[r]), t.call(null, e[c], c, e);
  }
}
function ir(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const me =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global,
  cr = (e) => !ke(e) && e !== me;
function mt() {
  const { caseless: e } = (cr(this) && this) || {},
    t = {},
    n = (r, s) => {
      const a = (e && ir(t, s)) || s;
      Me(t[a]) && Me(r)
        ? (t[a] = mt(t[a], r))
        : Me(r)
        ? (t[a] = mt({}, r))
        : ve(r)
        ? (t[a] = r.slice())
        : (t[a] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Ie(arguments[r], n);
  return t;
}
const Yn = (e, t, n, { allOwnKeys: r } = {}) => (
    Ie(
      t,
      (s, a) => {
        n && J(s) ? (e[a] = sr(s, n)) : (e[a] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Xn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Vn = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Jn = (e, t, n, r) => {
    let s, a, i;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
        (i = s[a]), (!r || r(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0));
      e = n !== !1 && jt(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Wn = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Gn = (e) => {
    if (!e) return null;
    if (ve(e)) return e;
    let t = e.length;
    if (!ar(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Zn = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && jt(Uint8Array)),
  $n = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const a = s.value;
      t.call(e, a[0], a[1]);
    }
  },
  es = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  ts = te('HTMLFormElement'),
  rs = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  kt = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  ns = te('RegExp'),
  lr = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Ie(n, (s, a) => {
      let i;
      (i = t(s, a, e)) !== !1 && (r[a] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  ss = (e) => {
    lr(e, (t, n) => {
      if (J(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (J(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  os = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((a) => {
          n[a] = !0;
        });
      };
    return ve(e) ? r(e) : r(String(e).split(t)), n;
  },
  as = () => {},
  is = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  at = 'abcdefghijklmnopqrstuvwxyz',
  Pt = '0123456789',
  dr = { DIGIT: Pt, ALPHA: at, ALPHA_DIGIT: at + at.toUpperCase() + Pt },
  cs = (e = 16, t = dr.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function ls(e) {
  return !!(
    e &&
    J(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const ds = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if ($e(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[s] = r;
            const a = ve(r) ? [] : {};
            return (
              Ie(r, (i, c) => {
                const l = n(i, s + 1);
                !ke(l) && (a[c] = l);
              }),
              (t[s] = void 0),
              a
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  us = te('AsyncFunction'),
  fs = (e) => e && ($e(e) || J(e)) && J(e.then) && J(e.catch),
  ur = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          me.addEventListener(
            'message',
            ({ source: s, data: a }) => {
              s === me && a === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), me.postMessage(n, '*');
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == 'function',
    J(me.postMessage)
  ),
  ps =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(me)
      : (typeof process < 'u' && process.nextTick) || ur,
  h = {
    isArray: ve,
    isArrayBuffer: or,
    isBuffer: On,
    isFormData: Mn,
    isArrayBufferView: Ln,
    isString: kn,
    isNumber: ar,
    isBoolean: Pn,
    isObject: $e,
    isPlainObject: Me,
    isReadableStream: qn,
    isRequest: zn,
    isResponse: Qn,
    isHeaders: Kn,
    isUndefined: ke,
    isDate: In,
    isFile: Bn,
    isBlob: Un,
    isRegExp: ns,
    isFunction: J,
    isStream: Fn,
    isURLSearchParams: Hn,
    isTypedArray: Zn,
    isFileList: Dn,
    forEach: Ie,
    merge: mt,
    extend: Yn,
    trim: _n,
    stripBOM: Xn,
    inherits: Vn,
    toFlatObject: Jn,
    kindOf: Ge,
    kindOfTest: te,
    endsWith: Wn,
    toArray: Gn,
    forEachEntry: $n,
    matchAll: es,
    isHTMLForm: ts,
    hasOwnProperty: kt,
    hasOwnProp: kt,
    reduceDescriptors: lr,
    freezeMethods: ss,
    toObjectSet: os,
    toCamelCase: rs,
    noop: as,
    toFiniteNumber: is,
    findKey: ir,
    global: me,
    isContextDefined: cr,
    ALPHABET: dr,
    generateString: cs,
    isSpecCompliantForm: ls,
    toJSONObject: ds,
    isAsyncFn: us,
    isThenable: fs,
    setImmediate: ur,
    asap: ps,
  };
function S(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
h.inherits(S, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: h.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const fr = S.prototype,
  pr = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  pr[e] = { value: e };
});
Object.defineProperties(S, pr);
Object.defineProperty(fr, 'isAxiosError', { value: !0 });
S.from = (e, t, n, r, s, a) => {
  const i = Object.create(fr);
  return (
    h.toFlatObject(
      e,
      i,
      function (l) {
        return l !== Error.prototype;
      },
      (c) => c !== 'isAxiosError'
    ),
    S.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    a && Object.assign(i, a),
    i
  );
};
const ms = null;
function ht(e) {
  return h.isPlainObject(e) || h.isArray(e);
}
function mr(e) {
  return h.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function It(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, a) {
          return (s = mr(s)), !n && a ? '[' + s + ']' : s;
        })
        .join(n ? '.' : '')
    : t;
}
function hs(e) {
  return h.isArray(e) && !e.some(ht);
}
const gs = h.toFlatObject(h, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function et(e, t, n) {
  if (!h.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = h.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, f) {
        return !h.isUndefined(f[g]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || d,
    a = n.dots,
    i = n.indexes,
    l = (n.Blob || (typeof Blob < 'u' && Blob)) && h.isSpecCompliantForm(t);
  if (!h.isFunction(s)) throw new TypeError('visitor must be a function');
  function u(m) {
    if (m === null) return '';
    if (h.isDate(m)) return m.toISOString();
    if (!l && h.isBlob(m))
      throw new S('Blob is not supported. Use a Buffer instead.');
    return h.isArrayBuffer(m) || h.isTypedArray(m)
      ? l && typeof Blob == 'function'
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function d(m, g, f) {
    let y = m;
    if (m && !f && typeof m == 'object') {
      if (h.endsWith(g, '{}'))
        (g = r ? g : g.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (h.isArray(m) && hs(m)) ||
        ((h.isFileList(m) || h.endsWith(g, '[]')) && (y = h.toArray(m)))
      )
        return (
          (g = mr(g)),
          y.forEach(function (E, j) {
            !(h.isUndefined(E) || E === null) &&
              t.append(
                i === !0 ? It([g], j, a) : i === null ? g : g + '[]',
                u(E)
              );
          }),
          !1
        );
    }
    return ht(m) ? !0 : (t.append(It(f, g, a), u(m)), !1);
  }
  const p = [],
    x = Object.assign(gs, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: ht,
    });
  function A(m, g) {
    if (!h.isUndefined(m)) {
      if (p.indexOf(m) !== -1)
        throw Error('Circular reference detected in ' + g.join('.'));
      p.push(m),
        h.forEach(m, function (y, w) {
          (!(h.isUndefined(y) || y === null) &&
            s.call(t, y, h.isString(w) ? w.trim() : w, g, x)) === !0 &&
            A(y, g ? g.concat(w) : [w]);
        }),
        p.pop();
    }
  }
  if (!h.isObject(e)) throw new TypeError('data must be an object');
  return A(e), t;
}
function Bt(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Tt(e, t) {
  (this._pairs = []), e && et(e, this, t);
}
const hr = Tt.prototype;
hr.append = function (t, n) {
  this._pairs.push([t, n]);
};
hr.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Bt);
      }
    : Bt;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + '=' + n(s[1]);
    }, '')
    .join('&');
};
function xs(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function gr(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || xs;
  h.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let a;
  if (
    (s
      ? (a = s(t, n))
      : (a = h.isURLSearchParams(t) ? t.toString() : new Tt(t, n).toString(r)),
    a)
  ) {
    const i = e.indexOf('#');
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + a);
  }
  return e;
}
class Ut {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    h.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const xr = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  As = typeof URLSearchParams < 'u' ? URLSearchParams : Tt,
  ys = typeof FormData < 'u' ? FormData : null,
  bs = typeof Blob < 'u' ? Blob : null,
  ws = {
    isBrowser: !0,
    classes: { URLSearchParams: As, FormData: ys, Blob: bs },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  Nt = typeof window < 'u' && typeof document < 'u',
  gt = (typeof navigator == 'object' && navigator) || void 0,
  Es =
    Nt &&
    (!gt || ['ReactNative', 'NativeScript', 'NS'].indexOf(gt.product) < 0),
  vs =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  js = (Nt && window.location.href) || 'http://localhost',
  Ts = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Nt,
        hasStandardBrowserEnv: Es,
        hasStandardBrowserWebWorkerEnv: vs,
        navigator: gt,
        origin: js,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Q = { ...Ts, ...ws };
function Ns(e, t) {
  return et(
    e,
    new Q.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, a) {
          return Q.isNode && h.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Cs(e) {
  return h
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function Ss(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let a;
  for (r = 0; r < s; r++) (a = n[r]), (t[a] = e[a]);
  return t;
}
function Ar(e) {
  function t(n, r, s, a) {
    let i = n[a++];
    if (i === '__proto__') return !0;
    const c = Number.isFinite(+i),
      l = a >= n.length;
    return (
      (i = !i && h.isArray(s) ? s.length : i),
      l
        ? (h.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !c)
        : ((!s[i] || !h.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], a) && h.isArray(s[i]) && (s[i] = Ss(s[i])),
          !c)
    );
  }
  if (h.isFormData(e) && h.isFunction(e.entries)) {
    const n = {};
    return (
      h.forEachEntry(e, (r, s) => {
        t(Cs(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Rs(e, t, n) {
  if (h.isString(e))
    try {
      return (t || JSON.parse)(e), h.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (0, JSON.stringify)(e);
}
const Be = {
  transitional: xr,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        s = r.indexOf('application/json') > -1,
        a = h.isObject(t);
      if ((a && h.isHTMLForm(t) && (t = new FormData(t)), h.isFormData(t)))
        return s ? JSON.stringify(Ar(t)) : t;
      if (
        h.isArrayBuffer(t) ||
        h.isBuffer(t) ||
        h.isStream(t) ||
        h.isFile(t) ||
        h.isBlob(t) ||
        h.isReadableStream(t)
      )
        return t;
      if (h.isArrayBufferView(t)) return t.buffer;
      if (h.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        );
      let c;
      if (a) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return Ns(t, this.formSerializer).toString();
        if ((c = h.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return et(
            c ? { 'files[]': t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return a || s ? (n.setContentType('application/json', !1), Rs(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Be.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === 'json';
      if (h.isResponse(t) || h.isReadableStream(t)) return t;
      if (t && h.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (i)
            throw c.name === 'SyntaxError'
              ? S.from(c, S.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Q.classes.FormData, Blob: Q.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
h.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  Be.headers[e] = {};
});
const Os = h.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  Ls = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(':')),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && Os[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  Dt = Symbol('internals');
function Ne(e) {
  return e && String(e).trim().toLowerCase();
}
function He(e) {
  return e === !1 || e == null ? e : h.isArray(e) ? e.map(He) : String(e);
}
function ks(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Ps = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function it(e, t, n, r, s) {
  if (h.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!h.isString(t))) {
    if (h.isString(r)) return t.indexOf(r) !== -1;
    if (h.isRegExp(r)) return r.test(t);
  }
}
function Is(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Bs(e, t) {
  const n = h.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, a, i) {
        return this[r].call(this, t, s, a, i);
      },
      configurable: !0,
    });
  });
}
class X {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function a(c, l, u) {
      const d = Ne(l);
      if (!d) throw new Error('header name must be a non-empty string');
      const p = h.findKey(s, d);
      (!p || s[p] === void 0 || u === !0 || (u === void 0 && s[p] !== !1)) &&
        (s[p || l] = He(c));
    }
    const i = (c, l) => h.forEach(c, (u, d) => a(u, d, l));
    if (h.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (h.isString(t) && (t = t.trim()) && !Ps(t)) i(Ls(t), n);
    else if (h.isHeaders(t)) for (const [c, l] of t.entries()) a(l, c, r);
    else t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Ne(t)), t)) {
      const r = h.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return ks(s);
        if (h.isFunction(n)) return n.call(this, s, r);
        if (h.isRegExp(n)) return n.exec(s);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = Ne(t)), t)) {
      const r = h.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || it(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function a(i) {
      if (((i = Ne(i)), i)) {
        const c = h.findKey(r, i);
        c && (!n || it(r, r[c], c, n)) && (delete r[c], (s = !0));
      }
    }
    return h.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || it(this, this[a], a, t, !0)) && (delete this[a], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      h.forEach(this, (s, a) => {
        const i = h.findKey(r, a);
        if (i) {
          (n[i] = He(s)), delete n[a];
          return;
        }
        const c = t ? Is(a) : String(a).trim();
        c !== a && delete n[a], (n[c] = He(s)), (r[c] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      h.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && h.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Dt] = this[Dt] = { accessors: {} }).accessors,
      s = this.prototype;
    function a(i) {
      const c = Ne(i);
      r[c] || (Bs(s, i), (r[c] = !0));
    }
    return h.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
X.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
h.reduceDescriptors(X.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
h.freezeMethods(X);
function ct(e, t) {
  const n = this || Be,
    r = t || n,
    s = X.from(r.headers);
  let a = r.data;
  return (
    h.forEach(e, function (c) {
      a = c.call(n, a, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    a
  );
}
function yr(e) {
  return !!(e && e.__CANCEL__);
}
function je(e, t, n) {
  S.call(this, e ?? 'canceled', S.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
h.inherits(je, S, { __CANCEL__: !0 });
function br(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new S(
          'Request failed with status code ' + n.status,
          [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function Us(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function Ds(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    a = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        d = r[a];
      i || (i = u), (n[s] = l), (r[s] = u);
      let p = a,
        x = 0;
      for (; p !== s; ) (x += n[p++]), (p = p % e);
      if (((s = (s + 1) % e), s === a && (a = (a + 1) % e), u - i < t)) return;
      const A = d && u - d;
      return A ? Math.round((x * 1e3) / A) : void 0;
    }
  );
}
function Fs(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    a;
  const i = (u, d = Date.now()) => {
    (n = d), (s = null), a && (clearTimeout(a), (a = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const d = Date.now(),
        p = d - n;
      p >= r
        ? i(u, d)
        : ((s = u),
          a ||
            (a = setTimeout(() => {
              (a = null), i(s);
            }, r - p)));
    },
    () => s && i(s),
  ];
}
const Ke = (e, t, n = 3) => {
    let r = 0;
    const s = Ds(50, 250);
    return Fs((a) => {
      const i = a.loaded,
        c = a.lengthComputable ? a.total : void 0,
        l = i - r,
        u = s(l),
        d = i <= c;
      r = i;
      const p = {
        loaded: i,
        total: c,
        progress: c ? i / c : void 0,
        bytes: l,
        rate: u || void 0,
        estimated: u && c && d ? (c - i) / u : void 0,
        event: a,
        lengthComputable: c != null,
        [t ? 'download' : 'upload']: !0,
      };
      e(p);
    }, n);
  },
  Ft = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Mt =
    (e) =>
    (...t) =>
      h.asap(() => e(...t)),
  Ms = Q.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, Q.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(Q.origin),
        Q.navigator && /(msie|trident)/i.test(Q.navigator.userAgent)
      )
    : () => !0,
  Hs = Q.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, a) {
          const i = [e + '=' + encodeURIComponent(t)];
          h.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
            h.isString(r) && i.push('path=' + r),
            h.isString(s) && i.push('domain=' + s),
            a === !0 && i.push('secure'),
            (document.cookie = i.join('; '));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function qs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function zs(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function wr(e, t) {
  return e && !qs(t) ? zs(e, t) : t;
}
const Ht = (e) => (e instanceof X ? { ...e } : e);
function Ae(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, p, x) {
    return h.isPlainObject(u) && h.isPlainObject(d)
      ? h.merge.call({ caseless: x }, u, d)
      : h.isPlainObject(d)
      ? h.merge({}, d)
      : h.isArray(d)
      ? d.slice()
      : d;
  }
  function s(u, d, p, x) {
    if (h.isUndefined(d)) {
      if (!h.isUndefined(u)) return r(void 0, u, p, x);
    } else return r(u, d, p, x);
  }
  function a(u, d) {
    if (!h.isUndefined(d)) return r(void 0, d);
  }
  function i(u, d) {
    if (h.isUndefined(d)) {
      if (!h.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function c(u, d, p) {
    if (p in t) return r(u, d);
    if (p in e) return r(void 0, u);
  }
  const l = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (u, d, p) => s(Ht(u), Ht(d), p, !0),
  };
  return (
    h.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const p = l[d] || s,
        x = p(e[d], t[d], d);
      (h.isUndefined(x) && p !== c) || (n[d] = x);
    }),
    n
  );
}
const Er = (e) => {
    const t = Ae({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: a,
      headers: i,
      auth: c,
    } = t;
    (t.headers = i = X.from(i)),
      (t.url = gr(wr(t.baseURL, t.url), e.params, e.paramsSerializer)),
      c &&
        i.set(
          'Authorization',
          'Basic ' +
            btoa(
              (c.username || '') +
                ':' +
                (c.password ? unescape(encodeURIComponent(c.password)) : '')
            )
        );
    let l;
    if (h.isFormData(n)) {
      if (Q.hasStandardBrowserEnv || Q.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((l = i.getContentType()) !== !1) {
        const [u, ...d] = l
          ? l
              .split(';')
              .map((p) => p.trim())
              .filter(Boolean)
          : [];
        i.setContentType([u || 'multipart/form-data', ...d].join('; '));
      }
    }
    if (
      Q.hasStandardBrowserEnv &&
      (r && h.isFunction(r) && (r = r(t)), r || (r !== !1 && Ms(t.url)))
    ) {
      const u = s && a && Hs.read(a);
      u && i.set(s, u);
    }
    return t;
  },
  Qs = typeof XMLHttpRequest < 'u',
  Ks =
    Qs &&
    function (e) {
      return new Promise(function (n, r) {
        const s = Er(e);
        let a = s.data;
        const i = X.from(s.headers).normalize();
        let { responseType: c, onUploadProgress: l, onDownloadProgress: u } = s,
          d,
          p,
          x,
          A,
          m;
        function g() {
          A && A(),
            m && m(),
            s.cancelToken && s.cancelToken.unsubscribe(d),
            s.signal && s.signal.removeEventListener('abort', d);
        }
        let f = new XMLHttpRequest();
        f.open(s.method.toUpperCase(), s.url, !0), (f.timeout = s.timeout);
        function y() {
          if (!f) return;
          const E = X.from(
              'getAllResponseHeaders' in f && f.getAllResponseHeaders()
            ),
            R = {
              data:
                !c || c === 'text' || c === 'json'
                  ? f.responseText
                  : f.response,
              status: f.status,
              statusText: f.statusText,
              headers: E,
              config: e,
              request: f,
            };
          br(
            function (L) {
              n(L), g();
            },
            function (L) {
              r(L), g();
            },
            R
          ),
            (f = null);
        }
        'onloadend' in f
          ? (f.onloadend = y)
          : (f.onreadystatechange = function () {
              !f ||
                f.readyState !== 4 ||
                (f.status === 0 &&
                  !(f.responseURL && f.responseURL.indexOf('file:') === 0)) ||
                setTimeout(y);
            }),
          (f.onabort = function () {
            f &&
              (r(new S('Request aborted', S.ECONNABORTED, e, f)), (f = null));
          }),
          (f.onerror = function () {
            r(new S('Network Error', S.ERR_NETWORK, e, f)), (f = null);
          }),
          (f.ontimeout = function () {
            let j = s.timeout
              ? 'timeout of ' + s.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const R = s.transitional || xr;
            s.timeoutErrorMessage && (j = s.timeoutErrorMessage),
              r(
                new S(
                  j,
                  R.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
                  e,
                  f
                )
              ),
              (f = null);
          }),
          a === void 0 && i.setContentType(null),
          'setRequestHeader' in f &&
            h.forEach(i.toJSON(), function (j, R) {
              f.setRequestHeader(R, j);
            }),
          h.isUndefined(s.withCredentials) ||
            (f.withCredentials = !!s.withCredentials),
          c && c !== 'json' && (f.responseType = s.responseType),
          u && (([x, m] = Ke(u, !0)), f.addEventListener('progress', x)),
          l &&
            f.upload &&
            (([p, A] = Ke(l)),
            f.upload.addEventListener('progress', p),
            f.upload.addEventListener('loadend', A)),
          (s.cancelToken || s.signal) &&
            ((d = (E) => {
              f &&
                (r(!E || E.type ? new je(null, e, f) : E),
                f.abort(),
                (f = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(d),
            s.signal &&
              (s.signal.aborted ? d() : s.signal.addEventListener('abort', d)));
        const w = Us(s.url);
        if (w && Q.protocols.indexOf(w) === -1) {
          r(new S('Unsupported protocol ' + w + ':', S.ERR_BAD_REQUEST, e));
          return;
        }
        f.send(a || null);
      });
    },
  _s = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const a = function (u) {
        if (!s) {
          (s = !0), c();
          const d = u instanceof Error ? u : this.reason;
          r.abort(
            d instanceof S ? d : new je(d instanceof Error ? d.message : d)
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), a(new S(`timeout ${t} of ms exceeded`, S.ETIMEDOUT));
        }, t);
      const c = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(a)
              : u.removeEventListener('abort', a);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener('abort', a));
      const { signal: l } = r;
      return (l.unsubscribe = () => h.asap(c)), l;
    }
  },
  Ys = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  Xs = async function* (e, t) {
    for await (const n of Vs(e)) yield* Ys(n, t);
  },
  Vs = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  qt = (e, t, n, r) => {
    const s = Xs(e, t);
    let a = 0,
      i,
      c = (l) => {
        i || ((i = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: u, value: d } = await s.next();
            if (u) {
              c(), l.close();
              return;
            }
            let p = d.byteLength;
            if (n) {
              let x = (a += p);
              n(x);
            }
            l.enqueue(new Uint8Array(d));
          } catch (u) {
            throw (c(u), u);
          }
        },
        cancel(l) {
          return c(l), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  tt =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  vr = tt && typeof ReadableStream == 'function',
  Js =
    tt &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  jr = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Ws =
    vr &&
    jr(() => {
      let e = !1;
      const t = new Request(Q.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  zt = 64 * 1024,
  xt = vr && jr(() => h.isReadableStream(new Response('').body)),
  _e = { stream: xt && ((e) => e.body) };
tt &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !_e[t] &&
        (_e[t] = h.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new S(
                `Response type '${t}' is not supported`,
                S.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const Gs = async (e) => {
    if (e == null) return 0;
    if (h.isBlob(e)) return e.size;
    if (h.isSpecCompliantForm(e))
      return (
        await new Request(Q.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength;
    if (h.isArrayBufferView(e) || h.isArrayBuffer(e)) return e.byteLength;
    if ((h.isURLSearchParams(e) && (e = e + ''), h.isString(e)))
      return (await Js(e)).byteLength;
  },
  Zs = async (e, t) => {
    const n = h.toFiniteNumber(e.getContentLength());
    return n ?? Gs(t);
  },
  $s =
    tt &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: a,
        timeout: i,
        onDownloadProgress: c,
        onUploadProgress: l,
        responseType: u,
        headers: d,
        withCredentials: p = 'same-origin',
        fetchOptions: x,
      } = Er(e);
      u = u ? (u + '').toLowerCase() : 'text';
      let A = _s([s, a && a.toAbortSignal()], i),
        m;
      const g =
        A &&
        A.unsubscribe &&
        (() => {
          A.unsubscribe();
        });
      let f;
      try {
        if (
          l &&
          Ws &&
          n !== 'get' &&
          n !== 'head' &&
          (f = await Zs(d, r)) !== 0
        ) {
          let R = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
            P;
          if (
            (h.isFormData(r) &&
              (P = R.headers.get('content-type')) &&
              d.setContentType(P),
            R.body)
          ) {
            const [L, v] = Ft(f, Ke(Mt(l)));
            r = qt(R.body, zt, L, v);
          }
        }
        h.isString(p) || (p = p ? 'include' : 'omit');
        const y = 'credentials' in Request.prototype;
        m = new Request(t, {
          ...x,
          signal: A,
          method: n.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: r,
          duplex: 'half',
          credentials: y ? p : void 0,
        });
        let w = await fetch(m);
        const E = xt && (u === 'stream' || u === 'response');
        if (xt && (c || (E && g))) {
          const R = {};
          ['status', 'statusText', 'headers'].forEach((T) => {
            R[T] = w[T];
          });
          const P = h.toFiniteNumber(w.headers.get('content-length')),
            [L, v] = (c && Ft(P, Ke(Mt(c), !0))) || [];
          w = new Response(
            qt(w.body, zt, L, () => {
              v && v(), g && g();
            }),
            R
          );
        }
        u = u || 'text';
        let j = await _e[h.findKey(_e, u) || 'text'](w, e);
        return (
          !E && g && g(),
          await new Promise((R, P) => {
            br(R, P, {
              data: j,
              headers: X.from(w.headers),
              status: w.status,
              statusText: w.statusText,
              config: e,
              request: m,
            });
          })
        );
      } catch (y) {
        throw (
          (g && g(),
          y && y.name === 'TypeError' && /fetch/i.test(y.message)
            ? Object.assign(new S('Network Error', S.ERR_NETWORK, e, m), {
                cause: y.cause || y,
              })
            : S.from(y, y && y.code, e, m))
        );
      }
    }),
  At = { http: ms, xhr: Ks, fetch: $s };
h.forEach(At, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const Qt = (e) => `- ${e}`,
  eo = (e) => h.isFunction(e) || e === null || e === !1,
  Tr = {
    getAdapter: (e) => {
      e = h.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let a = 0; a < t; a++) {
        n = e[a];
        let i;
        if (
          ((r = n),
          !eo(n) && ((r = At[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new S(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || '#' + a] = r;
      }
      if (!r) {
        const a = Object.entries(s).map(
          ([c, l]) =>
            `adapter ${c} ` +
            (l === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        );
        let i = t
          ? a.length > 1
            ? `since :
` +
              a.map(Qt).join(`
`)
            : ' ' + Qt(a[0])
          : 'as no adapter specified';
        throw new S(
          'There is no suitable adapter to dispatch the request ' + i,
          'ERR_NOT_SUPPORT'
        );
      }
      return r;
    },
    adapters: At,
  };
function lt(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new je(null, e);
}
function Kt(e) {
  return (
    lt(e),
    (e.headers = X.from(e.headers)),
    (e.data = ct.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Tr.getAdapter(e.adapter || Be.adapter)(e).then(
      function (r) {
        return (
          lt(e),
          (r.data = ct.call(e, e.transformResponse, r)),
          (r.headers = X.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          yr(r) ||
            (lt(e),
            r &&
              r.response &&
              ((r.response.data = ct.call(e, e.transformResponse, r.response)),
              (r.response.headers = X.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Nr = '1.7.9',
  rt = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    rt[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  }
);
const _t = {};
rt.transitional = function (t, n, r) {
  function s(a, i) {
    return (
      '[Axios v' +
      Nr +
      "] Transitional option '" +
      a +
      "'" +
      i +
      (r ? '. ' + r : '')
    );
  }
  return (a, i, c) => {
    if (t === !1)
      throw new S(
        s(i, ' has been removed' + (n ? ' in ' + n : '')),
        S.ERR_DEPRECATED
      );
    return (
      n &&
        !_t[i] &&
        ((_t[i] = !0),
        console.warn(
          s(
            i,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(a, i, c) : !0
    );
  };
};
rt.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function to(e, t, n) {
  if (typeof e != 'object')
    throw new S('options must be an object', S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const a = r[s],
      i = t[a];
    if (i) {
      const c = e[a],
        l = c === void 0 || i(c, a, e);
      if (l !== !0)
        throw new S('option ' + a + ' must be ' + l, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new S('Unknown option ' + a, S.ERR_BAD_OPTION);
  }
}
const qe = { assertOptions: to, validators: rt },
  oe = qe.validators;
class ge {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Ut(), response: new Ut() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const a = s.stack ? s.stack.replace(/^.+\n/, '') : '';
        try {
          r.stack
            ? a &&
              !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, '')) &&
              (r.stack +=
                `
` + a)
            : (r.stack = a);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Ae(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: a } = n;
    r !== void 0 &&
      qe.assertOptions(
        r,
        {
          silentJSONParsing: oe.transitional(oe.boolean),
          forcedJSONParsing: oe.transitional(oe.boolean),
          clarifyTimeoutError: oe.transitional(oe.boolean),
        },
        !1
      ),
      s != null &&
        (h.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : qe.assertOptions(
              s,
              { encode: oe.function, serialize: oe.function },
              !0
            )),
      qe.assertOptions(
        n,
        {
          baseUrl: oe.spelling('baseURL'),
          withXsrfToken: oe.spelling('withXSRFToken'),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let i = a && h.merge(a.common, a[n.method]);
    a &&
      h.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (m) => {
          delete a[m];
        }
      ),
      (n.headers = X.concat(i, a));
    const c = [];
    let l = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == 'function' && g.runWhen(n) === !1) ||
        ((l = l && g.synchronous), c.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (g) {
      u.push(g.fulfilled, g.rejected);
    });
    let d,
      p = 0,
      x;
    if (!l) {
      const m = [Kt.bind(this), void 0];
      for (
        m.unshift.apply(m, c),
          m.push.apply(m, u),
          x = m.length,
          d = Promise.resolve(n);
        p < x;

      )
        d = d.then(m[p++], m[p++]);
      return d;
    }
    x = c.length;
    let A = n;
    for (p = 0; p < x; ) {
      const m = c[p++],
        g = c[p++];
      try {
        A = m(A);
      } catch (f) {
        g.call(this, f);
        break;
      }
    }
    try {
      d = Kt.call(this, A);
    } catch (m) {
      return Promise.reject(m);
    }
    for (p = 0, x = u.length; p < x; ) d = d.then(u[p++], u[p++]);
    return d;
  }
  getUri(t) {
    t = Ae(this.defaults, t);
    const n = wr(t.baseURL, t.url);
    return gr(n, t.params, t.paramsSerializer);
  }
}
h.forEach(['delete', 'get', 'head', 'options'], function (t) {
  ge.prototype[t] = function (n, r) {
    return this.request(
      Ae(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
h.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (a, i, c) {
      return this.request(
        Ae(c || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: a,
          data: i,
        })
      );
    };
  }
  (ge.prototype[t] = n()), (ge.prototype[t + 'Form'] = n(!0));
});
class Ct {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (a) {
      n = a;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; ) r._listeners[a](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let a;
        const i = new Promise((c) => {
          r.subscribe(c), (a = c);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(a);
          }),
          i
        );
      }),
      t(function (a, i, c) {
        r.reason || ((r.reason = new je(a, i, c)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Ct(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function ro(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function no(e) {
  return h.isObject(e) && e.isAxiosError === !0;
}
const yt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(yt).forEach(([e, t]) => {
  yt[t] = e;
});
function Cr(e) {
  const t = new ge(e),
    n = sr(ge.prototype.request, t);
  return (
    h.extend(n, ge.prototype, t, { allOwnKeys: !0 }),
    h.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Cr(Ae(e, s));
    }),
    n
  );
}
const k = Cr(Be);
k.Axios = ge;
k.CanceledError = je;
k.CancelToken = Ct;
k.isCancel = yr;
k.VERSION = Nr;
k.toFormData = et;
k.AxiosError = S;
k.Cancel = k.CanceledError;
k.all = function (t) {
  return Promise.all(t);
};
k.spread = ro;
k.isAxiosError = no;
k.mergeConfig = Ae;
k.AxiosHeaders = X;
k.formToJSON = (e) => Ar(h.isHTMLForm(e) ? new FormData(e) : e);
k.getAdapter = Tr.getAdapter;
k.HttpStatusCode = yt;
k.default = k;
const Sr = ({ isLoading: e }) =>
    e
      ? o.jsx('div', {
          className:
            'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50',
          children: o.jsx('div', {
            className:
              'w-12 h-12 border-4 border-t-transparent border-red-500 rounded-full animate-spin',
          }),
        })
      : null,
  K = b.createContext(),
  so = (e) => {
    const t = '£',
      r = 'https://dammyskitchen-backend.vercel.app',
      [s, a] = b.useState(''),
      [i, c] = b.useState(!1),
      [l, u] = b.useState({}),
      [d, p] = b.useState([]),
      [x, A] = b.useState(''),
      [m, g] = b.useState(!1),
      f = Hr(),
      y = async (v, T, I, D, M) => {
        if (!x) {
          N.warning('You need to login to perform this action'), f('/login');
          return;
        }
        if (!D) {
          N.error('Select Product Size');
          return;
        }
        g(!0);
        try {
          let H = structuredClone(l);
          const F = M.map((W) => W.name).join(', '),
            z = `${D.size}-${F}-${I}`;
          if (H[v]) {
            const W = H[v][z];
            W
              ? (W.quantity += 1)
              : (H[v][z] = {
                  quantity: 1,
                  size: D,
                  protein: M,
                  spiceLevel: I,
                  totalPrice: T,
                });
          } else
            H[v] = {
              [z]: {
                quantity: 1,
                size: D,
                protein: M,
                spiceLevel: I,
                totalPrice: T,
              },
            };
          u(H),
            N.success('Item added to cart!'),
            x &&
              (await k.post(
                r + '/api/cart/add',
                {
                  itemId: v,
                  totalPrice: T,
                  spiceLevel: I,
                  size: D,
                  protein: M,
                },
                { headers: { token: x } }
              ));
        } catch (H) {
          console.log(H), N.error(H.message);
        } finally {
          g(!1);
        }
      },
      w = () => {
        let v = 0;
        return (
          Object.keys(l).forEach((T) => {
            Object.keys(l[T]).forEach((I) => {
              const D = l[T][I];
              v += D.quantity;
            });
          }),
          v
        );
      },
      E = async (v, T, I, D, M, H) => {
        let F = structuredClone(l);
        const z = `${T}-${I}-${D}`;
        if (
          (M === 0
            ? (F[v] && F[v][z] && delete F[v][z],
              Object.keys(F[v]).length === 0 && delete F[v])
            : F[v] && F[v][z]
            ? (F[v][z].quantity = M)
            : (F[v] = {
                [z]: {
                  quantity: M,
                  size: T,
                  proteinName: I,
                  spiceLevel: D,
                  totalPrice: H * M,
                },
              }),
          u(F),
          N.success('Item Updated Successfully!'),
          x)
        )
          try {
            await k.post(
              r + '/api/cart/update',
              { itemId: v, selectionKey: z, quantity: M, price: H },
              { headers: { token: x } }
            );
          } catch (W) {
            console.log(W), N.error(W.message);
          }
      },
      j = () => {
        let v = 0;
        return (
          Object.keys(l).forEach((T) => {
            Object.keys(l[T]).forEach((I) => {
              const D = l[T][I];
              v += D.totalPrice * D.quantity;
            });
          }),
          v
        );
      },
      R = async () => {
        g(!0);
        try {
          const v = await k.get(r + '/api/product/list');
          v.data.success
            ? p(v.data.products.reverse())
            : N.error(v.data.message);
        } catch (v) {
          console.log(v), N.error(v.message);
        } finally {
          g(!1);
        }
      },
      P = async (v) => {
        g(!0);
        try {
          const T = await k.post(
            r + '/api/cart/get',
            {},
            { headers: { token: v } }
          );
          T.data.success && u(T.data.cartData);
        } catch (T) {
          console.log(T), N.error(T.message);
        } finally {
          g(!1);
        }
      };
    b.useEffect(() => {
      R();
    }, []),
      b.useEffect(() => {
        !x &&
          localStorage.getItem('token') &&
          (A(localStorage.getItem('token')), P(localStorage.getItem('token'))),
          x && P(x);
      }, [x]);
    const L = {
      products: d,
      currency: t,
      delivery_fee: 0,
      search: s,
      setSearch: a,
      showSearch: i,
      setShowSearch: c,
      cartItems: l,
      addToCart: y,
      setCartItems: u,
      getCartCount: w,
      updateQuantity: E,
      getCartAmount: j,
      navigate: f,
      backendUrl: r,
      setToken: A,
      token: x,
      loading: m,
      setLoading: g,
    };
    return o.jsxs(o.Fragment, {
      children: [
        o.jsx(Sr, { isLoading: m }),
        o.jsx(K.Provider, { value: L, children: e.children }),
      ],
    });
  },
  Z = ({ text1: e, text2: t }) =>
    o.jsxs('div', {
      className: 'inline-flex gap-2 items-center mb-3',
      children: [
        o.jsxs('p', {
          className: 'text-gray-500',
          children: [
            e,
            ' ',
            o.jsx('span', {
              className: 'text-gray-700 font-medium',
              children: t,
            }),
          ],
        }),
        o.jsx('p', { className: 'w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700' }),
      ],
    }),
  nt = ({ id: e, image: t, name: n, price: r }) => {
    const { currency: s } = b.useContext(K);
    return o.jsxs(pe, {
      onClick: () => scrollTo(0, 0),
      className: 'text-gray-700 cursor-pointer',
      to: `/product/${e}`,
      children: [
        o.jsx('div', {
          className: ' overflow-hidden',
          children: o.jsx('img', {
            className:
              'hover:scale-110 transition ease-in-out h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] object-cover rounded-sm',
            src: t[0],
            alt: n,
          }),
        }),
        o.jsx('p', { className: 'pt-3 pb-1 text-base', children: n }),
        o.jsxs('p', { className: ' text-sm font-medium', children: [s, r] }),
      ],
    });
  },
  oo = () => {
    const { products: e } = b.useContext(K),
      [t, n] = b.useState([]);
    return (
      b.useEffect(() => {
        n(e.slice(0, 10));
      }, [e]),
      o.jsxs('div', {
        className: 'my-10 justify-center w-full',
        children: [
          o.jsx('div', {
            className: 'text-center py-8 text-3xl',
            children: o.jsx(Z, { text1: 'LATEST', text2: 'ITEMS' }),
          }),
          o.jsx('div', {
            className:
              'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6',
            children: t.map((r, s) =>
              o.jsx(
                nt,
                { id: r._id, image: r.image, name: r.name, price: r.price },
                s
              )
            ),
          }),
        ],
      })
    );
  },
  ao = () => {
    const { products: e } = b.useContext(K),
      [t, n] = b.useState([]);
    return (
      b.useEffect(() => {
        const r = e.filter((s) => s.bestseller);
        n(r.slice(0, 5));
      }, [e]),
      o.jsxs('div', {
        className: 'my-10',
        children: [
          o.jsx('div', {
            className: 'text-center text-3xl py-8',
            children: o.jsx(Z, { text1: 'BEST', text2: 'SELLERS' }),
          }),
          o.jsx('div', {
            className:
              'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6',
            children: t.map((r, s) =>
              o.jsx(
                nt,
                { id: r._id, name: r.name, image: r.image, price: r.price },
                s
              )
            ),
          }),
        ],
      })
    );
  },
  io = () =>
    o.jsx('div', {
      className:
        'flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700',
      children: o.jsxs('div', {
        children: [
          o.jsx('img', {
            src: q.support_img,
            className: 'w-12 m-auto mb-5',
            alt: 'Support',
          }),
          o.jsx('p', {
            className: ' font-semibold',
            children: 'Best customer support',
          }),
          o.jsx('p', {
            className: ' text-gray-400',
            children: 'we provide 24/7 customer support',
          }),
        ],
      }),
    });
var Rr = { exports: {} },
  co = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  lo = co,
  uo = lo;
function Or() {}
function Lr() {}
Lr.resetWarningCache = Or;
var fo = function () {
  function e(r, s, a, i, c, l) {
    if (l !== uo) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((u.name = 'Invariant Violation'), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Lr,
    resetWarningCache: Or,
  };
  return (n.PropTypes = n), n;
};
Rr.exports = fo();
var po = Rr.exports;
const B = Xe(po);
function mo(e) {
  return e && typeof e == 'object' && 'default' in e ? e.default : e;
}
var kr = b,
  ho = mo(kr);
function Yt(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function go(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var xo = !!(
  typeof window < 'u' &&
  window.document &&
  window.document.createElement
);
function Ao(e, t, n) {
  if (typeof e != 'function')
    throw new Error('Expected reducePropsToState to be a function.');
  if (typeof t != 'function')
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  if (typeof n < 'u' && typeof n != 'function')
    throw new Error(
      'Expected mapStateOnServer to either be undefined or a function.'
    );
  function r(s) {
    return s.displayName || s.name || 'Component';
  }
  return function (a) {
    if (typeof a != 'function')
      throw new Error('Expected WrappedComponent to be a React component.');
    var i = [],
      c;
    function l() {
      (c = e(
        i.map(function (d) {
          return d.props;
        })
      )),
        u.canUseDOM ? t(c) : n && (c = n(c));
    }
    var u = (function (d) {
      go(p, d);
      function p() {
        return d.apply(this, arguments) || this;
      }
      (p.peek = function () {
        return c;
      }),
        (p.rewind = function () {
          if (p.canUseDOM)
            throw new Error(
              'You may only call rewind() on the server. Call peek() to read the current state.'
            );
          var m = c;
          return (c = void 0), (i = []), m;
        });
      var x = p.prototype;
      return (
        (x.UNSAFE_componentWillMount = function () {
          i.push(this), l();
        }),
        (x.componentDidUpdate = function () {
          l();
        }),
        (x.componentWillUnmount = function () {
          var m = i.indexOf(this);
          i.splice(m, 1), l();
        }),
        (x.render = function () {
          return ho.createElement(a, this.props);
        }),
        p
      );
    })(kr.PureComponent);
    return (
      Yt(u, 'displayName', 'SideEffect(' + r(a) + ')'),
      Yt(u, 'canUseDOM', xo),
      u
    );
  };
}
var yo = Ao;
const bo = Xe(yo);
var wo = typeof Element < 'u',
  Eo = typeof Map == 'function',
  vo = typeof Set == 'function',
  jo = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
function ze(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1;
    var n, r, s;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!ze(e[r], t[r])) return !1;
      return !0;
    }
    var a;
    if (Eo && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!ze(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (vo && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (jo && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == 'function' &&
      typeof t.valueOf == 'function'
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == 'function' &&
      typeof t.toString == 'function'
    )
      return e.toString() === t.toString();
    if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, s[r])) return !1;
    if (wo && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (s[r] === '_owner' || s[r] === '__v' || s[r] === '__o') &&
          e.$$typeof
        ) &&
        !ze(e[s[r]], t[s[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var To = function (t, n) {
  try {
    return ze(t, n);
  } catch (r) {
    if ((r.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1;
    throw r;
  }
};
const No = Xe(To);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Xt = Object.getOwnPropertySymbols,
  Co = Object.prototype.hasOwnProperty,
  So = Object.prototype.propertyIsEnumerable;
function Ro(e) {
  if (e == null)
    throw new TypeError(
      'Object.assign cannot be called with null or undefined'
    );
  return Object(e);
}
function Oo() {
  try {
    if (!Object.assign) return !1;
    var e = new String('abc');
    if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1;
    for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (a) {
      return t[a];
    });
    if (r.join('') !== '0123456789') return !1;
    var s = {};
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function (a) {
        s[a] = a;
      }),
      Object.keys(Object.assign({}, s)).join('') === 'abcdefghijklmnopqrst'
    );
  } catch {
    return !1;
  }
}
var Lo = Oo()
  ? Object.assign
  : function (e, t) {
      for (var n, r = Ro(e), s, a = 1; a < arguments.length; a++) {
        n = Object(arguments[a]);
        for (var i in n) Co.call(n, i) && (r[i] = n[i]);
        if (Xt) {
          s = Xt(n);
          for (var c = 0; c < s.length; c++)
            So.call(n, s[c]) && (r[s[c]] = n[s[c]]);
        }
      }
      return r;
    };
const ko = Xe(Lo);
var xe = {
    BODY: 'bodyAttributes',
    HTML: 'htmlAttributes',
    TITLE: 'titleAttributes',
  },
  C = {
    BASE: 'base',
    BODY: 'body',
    HEAD: 'head',
    HTML: 'html',
    LINK: 'link',
    META: 'meta',
    NOSCRIPT: 'noscript',
    SCRIPT: 'script',
    STYLE: 'style',
    TITLE: 'title',
  };
Object.keys(C).map(function (e) {
  return C[e];
});
var U = {
    CHARSET: 'charset',
    CSS_TEXT: 'cssText',
    HREF: 'href',
    HTTPEQUIV: 'http-equiv',
    INNER_HTML: 'innerHTML',
    ITEM_PROP: 'itemprop',
    NAME: 'name',
    PROPERTY: 'property',
    REL: 'rel',
    SRC: 'src',
    TARGET: 'target',
  },
  Ye = {
    accesskey: 'accessKey',
    charset: 'charSet',
    class: 'className',
    contenteditable: 'contentEditable',
    contextmenu: 'contextMenu',
    'http-equiv': 'httpEquiv',
    itemprop: 'itemProp',
    tabindex: 'tabIndex',
  },
  Pe = {
    DEFAULT_TITLE: 'defaultTitle',
    DEFER: 'defer',
    ENCODE_SPECIAL_CHARACTERS: 'encodeSpecialCharacters',
    ON_CHANGE_CLIENT_STATE: 'onChangeClientState',
    TITLE_TEMPLATE: 'titleTemplate',
  },
  Po = Object.keys(Ye).reduce(function (e, t) {
    return (e[Ye[t]] = t), e;
  }, {}),
  Io = [C.NOSCRIPT, C.SCRIPT, C.STYLE],
  ee = 'data-react-helmet',
  Bo =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == 'function' &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        },
  Uo = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  },
  Do = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var s = n[r];
        (s.enumerable = s.enumerable || !1),
          (s.configurable = !0),
          'value' in s && (s.writable = !0),
          Object.defineProperty(t, s.key, s);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Y =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Fo = function (e, t) {
    if (typeof t != 'function' && t !== null)
      throw new TypeError(
        'Super expression must either be null or a function, not ' + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  },
  Vt = function (e, t) {
    var n = {};
    for (var r in e)
      t.indexOf(r) >= 0 ||
        (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
    return n;
  },
  Mo = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == 'object' || typeof t == 'function') ? t : e;
  },
  bt = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1
      ? String(t)
      : String(t)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;');
  },
  Ho = function (t) {
    var n = Ee(t, C.TITLE),
      r = Ee(t, Pe.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join('') : n;
      });
    var s = Ee(t, Pe.DEFAULT_TITLE);
    return n || s || void 0;
  },
  qo = function (t) {
    return Ee(t, Pe.ON_CHANGE_CLIENT_STATE) || function () {};
  },
  dt = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[t] < 'u';
      })
      .map(function (r) {
        return r[t];
      })
      .reduce(function (r, s) {
        return Y({}, r, s);
      }, {});
  },
  zo = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[C.BASE] < 'u';
      })
      .map(function (r) {
        return r[C.BASE];
      })
      .reverse()
      .reduce(function (r, s) {
        if (!r.length)
          for (var a = Object.keys(s), i = 0; i < a.length; i++) {
            var c = a[i],
              l = c.toLowerCase();
            if (t.indexOf(l) !== -1 && s[l]) return r.concat(s);
          }
        return r;
      }, []);
  },
  Ce = function (t, n, r) {
    var s = {};
    return r
      .filter(function (a) {
        return Array.isArray(a[t])
          ? !0
          : (typeof a[t] < 'u' &&
              Yo(
                'Helmet: ' +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  Bo(a[t]) +
                  '"'
              ),
            !1);
      })
      .map(function (a) {
        return a[t];
      })
      .reverse()
      .reduce(function (a, i) {
        var c = {};
        i.filter(function (x) {
          for (var A = void 0, m = Object.keys(x), g = 0; g < m.length; g++) {
            var f = m[g],
              y = f.toLowerCase();
            n.indexOf(y) !== -1 &&
              !(A === U.REL && x[A].toLowerCase() === 'canonical') &&
              !(y === U.REL && x[y].toLowerCase() === 'stylesheet') &&
              (A = y),
              n.indexOf(f) !== -1 &&
                (f === U.INNER_HTML || f === U.CSS_TEXT || f === U.ITEM_PROP) &&
                (A = f);
          }
          if (!A || !x[A]) return !1;
          var w = x[A].toLowerCase();
          return (
            s[A] || (s[A] = {}),
            c[A] || (c[A] = {}),
            s[A][w] ? !1 : ((c[A][w] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (x) {
            return a.push(x);
          });
        for (var l = Object.keys(c), u = 0; u < l.length; u++) {
          var d = l[u],
            p = ko({}, s[d], c[d]);
          s[d] = p;
        }
        return a;
      }, [])
      .reverse();
  },
  Ee = function (t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var s = t[r];
      if (s.hasOwnProperty(n)) return s[n];
    }
    return null;
  },
  Qo = function (t) {
    return {
      baseTag: zo([U.HREF, U.TARGET], t),
      bodyAttributes: dt(xe.BODY, t),
      defer: Ee(t, Pe.DEFER),
      encode: Ee(t, Pe.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: dt(xe.HTML, t),
      linkTags: Ce(C.LINK, [U.REL, U.HREF], t),
      metaTags: Ce(
        C.META,
        [U.NAME, U.CHARSET, U.HTTPEQUIV, U.PROPERTY, U.ITEM_PROP],
        t
      ),
      noscriptTags: Ce(C.NOSCRIPT, [U.INNER_HTML], t),
      onChangeClientState: qo(t),
      scriptTags: Ce(C.SCRIPT, [U.SRC, U.INNER_HTML], t),
      styleTags: Ce(C.STYLE, [U.CSS_TEXT], t),
      title: Ho(t),
      titleAttributes: dt(xe.TITLE, t),
    };
  },
  wt = (function () {
    var e = Date.now();
    return function (t) {
      var n = Date.now();
      n - e > 16
        ? ((e = n), t(n))
        : setTimeout(function () {
            wt(t);
          }, 0);
    };
  })(),
  Jt = function (t) {
    return clearTimeout(t);
  },
  Ko =
    typeof window < 'u'
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        wt
      : global.requestAnimationFrame || wt,
  _o =
    typeof window < 'u'
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        Jt
      : global.cancelAnimationFrame || Jt,
  Yo = function (t) {
    return console && typeof console.warn == 'function' && console.warn(t);
  },
  Se = null,
  Xo = function (t) {
    Se && _o(Se),
      t.defer
        ? (Se = Ko(function () {
            Wt(t, function () {
              Se = null;
            });
          }))
        : (Wt(t), (Se = null));
  },
  Wt = function (t, n) {
    var r = t.baseTag,
      s = t.bodyAttributes,
      a = t.htmlAttributes,
      i = t.linkTags,
      c = t.metaTags,
      l = t.noscriptTags,
      u = t.onChangeClientState,
      d = t.scriptTags,
      p = t.styleTags,
      x = t.title,
      A = t.titleAttributes;
    Et(C.BODY, s), Et(C.HTML, a), Vo(x, A);
    var m = {
        baseTag: we(C.BASE, r),
        linkTags: we(C.LINK, i),
        metaTags: we(C.META, c),
        noscriptTags: we(C.NOSCRIPT, l),
        scriptTags: we(C.SCRIPT, d),
        styleTags: we(C.STYLE, p),
      },
      g = {},
      f = {};
    Object.keys(m).forEach(function (y) {
      var w = m[y],
        E = w.newTags,
        j = w.oldTags;
      E.length && (g[y] = E), j.length && (f[y] = m[y].oldTags);
    }),
      n && n(),
      u(t, g, f);
  },
  Pr = function (t) {
    return Array.isArray(t) ? t.join('') : t;
  },
  Vo = function (t, n) {
    typeof t < 'u' && document.title !== t && (document.title = Pr(t)),
      Et(C.TITLE, n);
  },
  Et = function (t, n) {
    var r = document.getElementsByTagName(t)[0];
    if (r) {
      for (
        var s = r.getAttribute(ee),
          a = s ? s.split(',') : [],
          i = [].concat(a),
          c = Object.keys(n),
          l = 0;
        l < c.length;
        l++
      ) {
        var u = c[l],
          d = n[u] || '';
        r.getAttribute(u) !== d && r.setAttribute(u, d),
          a.indexOf(u) === -1 && a.push(u);
        var p = i.indexOf(u);
        p !== -1 && i.splice(p, 1);
      }
      for (var x = i.length - 1; x >= 0; x--) r.removeAttribute(i[x]);
      a.length === i.length
        ? r.removeAttribute(ee)
        : r.getAttribute(ee) !== c.join(',') && r.setAttribute(ee, c.join(','));
    }
  },
  we = function (t, n) {
    var r = document.head || document.querySelector(C.HEAD),
      s = r.querySelectorAll(t + '[' + ee + ']'),
      a = Array.prototype.slice.call(s),
      i = [],
      c = void 0;
    return (
      n &&
        n.length &&
        n.forEach(function (l) {
          var u = document.createElement(t);
          for (var d in l)
            if (l.hasOwnProperty(d))
              if (d === U.INNER_HTML) u.innerHTML = l.innerHTML;
              else if (d === U.CSS_TEXT)
                u.styleSheet
                  ? (u.styleSheet.cssText = l.cssText)
                  : u.appendChild(document.createTextNode(l.cssText));
              else {
                var p = typeof l[d] > 'u' ? '' : l[d];
                u.setAttribute(d, p);
              }
          u.setAttribute(ee, 'true'),
            a.some(function (x, A) {
              return (c = A), u.isEqualNode(x);
            })
              ? a.splice(c, 1)
              : i.push(u);
        }),
      a.forEach(function (l) {
        return l.parentNode.removeChild(l);
      }),
      i.forEach(function (l) {
        return r.appendChild(l);
      }),
      { oldTags: a, newTags: i }
    );
  },
  Ir = function (t) {
    return Object.keys(t).reduce(function (n, r) {
      var s = typeof t[r] < 'u' ? r + '="' + t[r] + '"' : '' + r;
      return n ? n + ' ' + s : s;
    }, '');
  },
  Jo = function (t, n, r, s) {
    var a = Ir(r),
      i = Pr(n);
    return a
      ? '<' + t + ' ' + ee + '="true" ' + a + '>' + bt(i, s) + '</' + t + '>'
      : '<' + t + ' ' + ee + '="true">' + bt(i, s) + '</' + t + '>';
  },
  Wo = function (t, n, r) {
    return n.reduce(function (s, a) {
      var i = Object.keys(a)
          .filter(function (u) {
            return !(u === U.INNER_HTML || u === U.CSS_TEXT);
          })
          .reduce(function (u, d) {
            var p = typeof a[d] > 'u' ? d : d + '="' + bt(a[d], r) + '"';
            return u ? u + ' ' + p : p;
          }, ''),
        c = a.innerHTML || a.cssText || '',
        l = Io.indexOf(t) === -1;
      return (
        s +
        '<' +
        t +
        ' ' +
        ee +
        '="true" ' +
        i +
        (l ? '/>' : '>' + c + '</' + t + '>')
      );
    }, '');
  },
  Br = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, s) {
      return (r[Ye[s] || s] = t[s]), r;
    }, n);
  },
  Go = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, s) {
      return (r[Po[s] || s] = t[s]), r;
    }, n);
  },
  Zo = function (t, n, r) {
    var s,
      a = ((s = { key: n }), (s[ee] = !0), s),
      i = Br(r, a);
    return [O.createElement(C.TITLE, i, n)];
  },
  $o = function (t, n) {
    return n.map(function (r, s) {
      var a,
        i = ((a = { key: s }), (a[ee] = !0), a);
      return (
        Object.keys(r).forEach(function (c) {
          var l = Ye[c] || c;
          if (l === U.INNER_HTML || l === U.CSS_TEXT) {
            var u = r.innerHTML || r.cssText;
            i.dangerouslySetInnerHTML = { __html: u };
          } else i[l] = r[c];
        }),
        O.createElement(t, i)
      );
    });
  },
  ie = function (t, n, r) {
    switch (t) {
      case C.TITLE:
        return {
          toComponent: function () {
            return Zo(t, n.title, n.titleAttributes);
          },
          toString: function () {
            return Jo(t, n.title, n.titleAttributes, r);
          },
        };
      case xe.BODY:
      case xe.HTML:
        return {
          toComponent: function () {
            return Br(n);
          },
          toString: function () {
            return Ir(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return $o(t, n);
          },
          toString: function () {
            return Wo(t, n, r);
          },
        };
    }
  },
  Ur = function (t) {
    var n = t.baseTag,
      r = t.bodyAttributes,
      s = t.encode,
      a = t.htmlAttributes,
      i = t.linkTags,
      c = t.metaTags,
      l = t.noscriptTags,
      u = t.scriptTags,
      d = t.styleTags,
      p = t.title,
      x = p === void 0 ? '' : p,
      A = t.titleAttributes;
    return {
      base: ie(C.BASE, n, s),
      bodyAttributes: ie(xe.BODY, r, s),
      htmlAttributes: ie(xe.HTML, a, s),
      link: ie(C.LINK, i, s),
      meta: ie(C.META, c, s),
      noscript: ie(C.NOSCRIPT, l, s),
      script: ie(C.SCRIPT, u, s),
      style: ie(C.STYLE, d, s),
      title: ie(C.TITLE, { title: x, titleAttributes: A }, s),
    };
  },
  ea = function (t) {
    var n, r;
    return (
      (r = n =
        (function (s) {
          Fo(a, s);
          function a() {
            return Uo(this, a), Mo(this, s.apply(this, arguments));
          }
          return (
            (a.prototype.shouldComponentUpdate = function (c) {
              return !No(this.props, c);
            }),
            (a.prototype.mapNestedChildrenToProps = function (c, l) {
              if (!l) return null;
              switch (c.type) {
                case C.SCRIPT:
                case C.NOSCRIPT:
                  return { innerHTML: l };
                case C.STYLE:
                  return { cssText: l };
              }
              throw new Error(
                '<' +
                  c.type +
                  ' /> elements are self-closing and can not contain children. Refer to our API for more information.'
              );
            }),
            (a.prototype.flattenArrayTypeChildren = function (c) {
              var l,
                u = c.child,
                d = c.arrayTypeChildren,
                p = c.newChildProps,
                x = c.nestedChildren;
              return Y(
                {},
                d,
                ((l = {}),
                (l[u.type] = [].concat(d[u.type] || [], [
                  Y({}, p, this.mapNestedChildrenToProps(u, x)),
                ])),
                l)
              );
            }),
            (a.prototype.mapObjectTypeChildren = function (c) {
              var l,
                u,
                d = c.child,
                p = c.newProps,
                x = c.newChildProps,
                A = c.nestedChildren;
              switch (d.type) {
                case C.TITLE:
                  return Y(
                    {},
                    p,
                    ((l = {}),
                    (l[d.type] = A),
                    (l.titleAttributes = Y({}, x)),
                    l)
                  );
                case C.BODY:
                  return Y({}, p, { bodyAttributes: Y({}, x) });
                case C.HTML:
                  return Y({}, p, { htmlAttributes: Y({}, x) });
              }
              return Y({}, p, ((u = {}), (u[d.type] = Y({}, x)), u));
            }),
            (a.prototype.mapArrayTypeChildrenToProps = function (c, l) {
              var u = Y({}, l);
              return (
                Object.keys(c).forEach(function (d) {
                  var p;
                  u = Y({}, u, ((p = {}), (p[d] = c[d]), p));
                }),
                u
              );
            }),
            (a.prototype.warnOnInvalidChildren = function (c, l) {
              return !0;
            }),
            (a.prototype.mapChildrenToProps = function (c, l) {
              var u = this,
                d = {};
              return (
                O.Children.forEach(c, function (p) {
                  if (!(!p || !p.props)) {
                    var x = p.props,
                      A = x.children,
                      m = Vt(x, ['children']),
                      g = Go(m);
                    switch ((u.warnOnInvalidChildren(p, A), p.type)) {
                      case C.LINK:
                      case C.META:
                      case C.NOSCRIPT:
                      case C.SCRIPT:
                      case C.STYLE:
                        d = u.flattenArrayTypeChildren({
                          child: p,
                          arrayTypeChildren: d,
                          newChildProps: g,
                          nestedChildren: A,
                        });
                        break;
                      default:
                        l = u.mapObjectTypeChildren({
                          child: p,
                          newProps: l,
                          newChildProps: g,
                          nestedChildren: A,
                        });
                        break;
                    }
                  }
                }),
                (l = this.mapArrayTypeChildrenToProps(d, l)),
                l
              );
            }),
            (a.prototype.render = function () {
              var c = this.props,
                l = c.children,
                u = Vt(c, ['children']),
                d = Y({}, u);
              return (
                l && (d = this.mapChildrenToProps(l, d)), O.createElement(t, d)
              );
            }),
            Do(a, null, [
              {
                key: 'canUseDOM',
                set: function (c) {
                  t.canUseDOM = c;
                },
              },
            ]),
            a
          );
        })(O.Component)),
      (n.propTypes = {
        base: B.object,
        bodyAttributes: B.object,
        children: B.oneOfType([B.arrayOf(B.node), B.node]),
        defaultTitle: B.string,
        defer: B.bool,
        encodeSpecialCharacters: B.bool,
        htmlAttributes: B.object,
        link: B.arrayOf(B.object),
        meta: B.arrayOf(B.object),
        noscript: B.arrayOf(B.object),
        onChangeClientState: B.func,
        script: B.arrayOf(B.object),
        style: B.arrayOf(B.object),
        title: B.string,
        titleAttributes: B.object,
        titleTemplate: B.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = t.peek),
      (n.rewind = function () {
        var s = t.rewind();
        return (
          s ||
            (s = Ur({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: '',
              titleAttributes: {},
            })),
          s
        );
      }),
      r
    );
  },
  ta = function () {
    return null;
  },
  ra = bo(Qo, Xo, Ur)(ta),
  vt = ea(ra);
vt.renderStatic = vt.rewind;
const St = ({
    title: e = 'Order Nigerian Food in London | DammysKitchen',
    description:
      t = 'Get fast, affordable Nigerian meals delivered in London. Order online now from DammysKitchen.',
    url: n = 'https://www.dammyskitchen.co.uk',
    image: r = q.logo,
    keywords:
      s = 'Nigerian food London, order Nigerian food online, African meals delivery, DammysKitchen, food delivery London, Nigerian meals London, Nigerian cuisine London, African food delivery London, Nigerian restaurant London, jollof rice London, suya delivery London, Nigerian takeout London, best Nigerian food London, Nigerian food near me, traditional Nigerian meals, spicy Nigerian food London, Nigerian fast food London, Afro-Caribbean food London, Nigerian food home delivery, Nigerian catering London, egusi soup London, pounded yam London, efo riro London, jollof rice London, fried rice London, amala delivery London, eba and soup London, nkwobi London, pepper soup London, moi moi London, asun delivery London, Nigerian snacks London, gizdodo London, Nigerian stew delivery London, African dishes UK, authentic Nigerian meals London, Nigerian food for parties London, Nigerian delicacies UK, order African food London, Nigerian breakfast London, Nigerian lunch delivery, Nigerian dinner delivery',
  }) =>
    o.jsxs(vt, {
      children: [
        o.jsx('title', { children: e }),
        o.jsx('meta', {
          name: 'google-site-verification',
          content: 'mk-64cc-8NanV6BV2XKV4bdHae1GiAmQHIP3jqmNDvU',
        }),
        o.jsx('meta', { name: 'description', content: t }),
        o.jsx('meta', { name: 'keywords', content: s }),
        o.jsx('meta', { name: 'author', content: 'DammysKitchen' }),
        o.jsx('meta', { property: 'og:type', content: 'website' }),
        o.jsx('meta', { property: 'og:title', content: e }),
        o.jsx('meta', { property: 'og:description', content: t }),
        o.jsx('meta', { property: 'og:url', content: n }),
        o.jsx('meta', { property: 'og:image', content: r }),
        o.jsx('meta', { property: 'og:site_name', content: 'DammysKitchen' }),
        o.jsx('meta', { property: 'og:image:alt', content: t }),
        o.jsx('meta', { property: 'og:image:width', content: '1200' }),
        o.jsx('meta', { property: 'og:image:height', content: '630' }),
        o.jsx('meta', {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        }),
        o.jsx('meta', { name: 'theme-color', content: '#ff9900' }),
        o.jsx('meta', { name: 'mobile-web-app-capable', content: 'yes' }),
        o.jsx('meta', {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        }),
        o.jsx('link', { rel: 'canonical', href: n }),
        o.jsx('link', { rel: 'icon', href: q.logo }),
        o.jsx('script', {
          type: 'application/ld+json',
          children: `
      {
        "@context": "https://schema.org",
        "@type": "DeliveryRestaurant",
        "@id": "https://www.dammyskitchen.co.uk",
        "name": "DammysKitchen",
        "image": "https://www.dammyskitchen.co.uk/logo.png",
        "url": "https://www.dammyskitchen.co.uk",
        "logo": "https://www.dammyskitchen.co.uk/logo.png",
        "description": "DammysKitchen offers delicious, authentic Nigerian food delivered fast across London. Order online today.",
        "telephone": "+44-20-1234-5678",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Nigerian St",
          "addressLocality": "London",
          "addressCountry": "GB",
          "postalCode": "E1 6AN"
        },
        "sameAs": [
          "https://www.facebook.com/dammyskitchen",
          "https://www.instagram.com/dammys_kictchen?utm_source=qr&igsh=OGJ5NmVudnQyaTA3",
        ],
        "menu": "https://www.dammyskitchen.co.uk/collection",
        "acceptsReservations": "True",
        "servesCuisine": "Nigerian",
        "priceRange": "££",
        "openingHours": "Mo-Su 10:00-22:00"
      }
    `,
        }),
      ],
    }),
  na = () =>
    o.jsxs(o.Fragment, {
      children: [
        o.jsx(St, {
          title: 'DammysKitchen | Nigerian Food Delivery in London',
          description:
            'Craving Nigerian food? DammysKitchen delivers fresh, authentic meals across London. Order online now!',
          url: 'https://www.dammyskitchen.co.uk',
        }),
        o.jsxs('div', {
          children: [
            o.jsx(gn, {}),
            o.jsx(oo, {}),
            o.jsx(ao, {}),
            o.jsx(io, {}),
            o.jsx('div', {
              className:
                'flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700',
              children: o.jsx('div', {
                children: o.jsx('img', {
                  src: q.items_banner,
                  className: 'w-[80%] m-auto mb-5',
                  alt: 'Home Banner',
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  sa = () => {
    const { products: e, search: t, showSearch: n } = b.useContext(K),
      [r, s] = b.useState([]),
      [a, i] = b.useState([]),
      [c, l] = b.useState([]),
      [u, d] = b.useState('relavent'),
      p = () => {
        let A = e.slice();
        n &&
          t &&
          (A = A.filter(
            (m) =>
              m.name.toLowerCase().includes(t.toLowerCase()) ||
              m.tags.some((g) => g.toLowerCase().includes(t.toLowerCase())) ||
              m.proteins.some((g) =>
                g.name.toLowerCase().includes(t.toLowerCase())
              )
          )),
          a.length > 0 && (A = A.filter((m) => a.includes(m.category))),
          c.length > 0 && (A = A.filter((m) => c.includes(m.subCategory))),
          s(A);
      },
      x = () => {
        let A = r.slice();
        switch (u) {
          case 'low-high':
            s(A.sort((m, g) => m.price - g.price));
            break;
          case 'high-low':
            s(A.sort((m, g) => g.price - m.price));
            break;
          default:
            p();
            break;
        }
      };
    return (
      b.useEffect(() => {
        p();
      }, [a, c, t, n, e]),
      b.useEffect(() => {
        x();
      }, [u]),
      o.jsxs(o.Fragment, {
        children: [
          o.jsx(St, {
            title:
              'Browse our Collection and Order Nigerian Food Online | DammysKitchen',
            description:
              'Hot and fresh Nigerian meals delivered fast in London. Order online now.',
            url: 'https://www.dammyskitchen.co.uk/collection',
          }),
          o.jsx('div', {
            className:
              'flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t',
            children: o.jsxs('div', {
              className: 'flex-1',
              children: [
                o.jsxs('div', {
                  className: 'flex justify-between text-base sm:text-2xl mb-4',
                  children: [
                    o.jsx(Z, { text1: 'ALL', text2: 'COLLECTIONS' }),
                    o.jsxs('select', {
                      onChange: (A) => d(A.target.value),
                      className: 'border-2 border-gray-300 text-sm px-2',
                      children: [
                        o.jsx('option', {
                          value: 'relavent',
                          children: 'Sort by: Relavent',
                        }),
                        o.jsx('option', {
                          value: 'low-high',
                          children: 'Sort by: Low to High',
                        }),
                        o.jsx('option', {
                          value: 'high-low',
                          children: 'Sort by: High to Low',
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsx('div', {
                  className:
                    'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 gap-y-6',
                  children: r.map((A, m) =>
                    o.jsx(
                      nt,
                      {
                        name: A.name,
                        id: A._id,
                        price: A.price,
                        image: A.image,
                      },
                      m
                    )
                  ),
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  oa = () =>
    o.jsxs(o.Fragment, {
      children: [
        o.jsx(St, {
          title: 'About DammysKitchen | Authentic Nigerian Food in London',
          description:
            'Learn more about the mission behind DammysKitchen, your go-to for Nigerian food delivery in London.',
          url: 'https://www.dammyskitchen.co.uk/about',
        }),
        o.jsxs('div', {
          children: [
            o.jsx('div', {
              className: 'text-2xl text-center pt-8 border-t',
              children: o.jsx(Z, { text1: 'ABOUT', text2: 'US' }),
            }),
            o.jsxs('div', {
              className: 'my-10 flex flex-col md:flex-row gap-16',
              children: [
                o.jsx('img', {
                  className: 'w-full md:max-w-[450px]',
                  src: q.about_food,
                  alt: 'About Image',
                }),
                o.jsxs('div', {
                  className:
                    'flex flex-col justify-center gap-6 md:w-2/4 text-gray-600',
                  children: [
                    o.jsx('p', {
                      children:
                        "Dammy's kitchen and catering services was established as the company , The company is renowned for its strict compliance to Food Safety and Hygiene Standards in addition to providing excellent customer services.The ability to providing our services along the length and breadth of the country meant that we are not restricted either by distance or location.",
                    }),
                    o.jsxs('p', {
                      children: [
                        ' ',
                        'Our team of dedicated chefs are very creative with unwavering passion for cooking authentic Nigeria cuisine. The technical skills and cooking techniques demonstrated on a day-day basis in our kitchen is a testament to the cooking abilities of our chefs',
                      ],
                    }),
                    o.jsx('b', {
                      className: 'text-gray-800',
                      children: 'Unique Selling Points',
                    }),
                    o.jsxs('p', {
                      children: [
                        'To explain why our customers loves our food and services, in our recent polls these are some of the reasons given. ',
                        o.jsx('br', {}),
                        ' The food tasted very fresh and authentic',
                        o.jsx('br', {}),
                        ' The manager was very trustworthy and helpful ',
                        o.jsx('br', {}),
                        'The staffs were smartly dressed and very cautious ',
                        o.jsx('br', {}),
                        'The food presentation was excellent Catering staff arrived at the event on time. ',
                        o.jsx('br', {}),
                        'The venue was sparkling clean after the event.',
                        o.jsx('br', {}),
                        ' There was more than enough food for the event.',
                        o.jsx('br', {}),
                        ' The food tasted very delicious',
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx('div', {
              className: ' text-xl py-4',
              children: o.jsx(Z, { text1: 'WHY', text2: 'CHOOSE US' }),
            }),
            o.jsxs('div', {
              className: 'flex flex-col md:flex-row text-sm mb-20',
              children: [
                o.jsxs('div', {
                  className:
                    'border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5',
                  children: [
                    o.jsx('b', { children: 'Quality Assurance:' }),
                    o.jsx('p', {
                      className: ' text-gray-600',
                      children:
                        'We meticulously select and vet each order to ensure it meets our stringent quality standards.',
                    }),
                  ],
                }),
                o.jsxs('div', {
                  className:
                    'border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5',
                  children: [
                    o.jsx('b', { children: 'Convenience:' }),
                    o.jsx('p', {
                      className: ' text-gray-600',
                      children:
                        'With our user-friendly interface and hassle-free ordering process, ordering has never been easier.',
                    }),
                  ],
                }),
                o.jsxs('div', {
                  className:
                    'border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5',
                  children: [
                    o.jsx('b', { children: 'Exceptional Customer Service:' }),
                    o.jsx('p', {
                      className: ' text-gray-600',
                      children:
                        'Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  aa = () => {
    const { backendUrl: e } = b.useContext(K),
      [t, n] = b.useState(!1),
      [r, s] = b.useState({ name: '', email: '', phone: '', message: '' }),
      a = (c) => {
        const { name: l, value: u } = c.target;
        s({ ...r, [l]: u });
      },
      i = async (c) => {
        n(!0), c.preventDefault();
        try {
          const l = await k.post(`${e}/api/v1/quote`, r);
          l.data.success
            ? N.success('Quote request sent and saved successfully')
            : (console.log(l.data.message),
              N.error('Failed to send the quote request'));
        } catch (l) {
          console.error('Error submitting form:', l),
            N.error('There was an error processing your request');
        } finally {
          n(!1);
        }
      };
    return o.jsxs('div', {
      children: [
        o.jsx('div', {
          className: 'text-center text-2xl pt-10 border-t',
          children: o.jsx(Z, { text1: 'CONTACT', text2: 'US' }),
        }),
        o.jsxs('div', {
          className:
            'my-10 flex flex-col justify-center md:flex-row gap-10 mb-28',
          children: [
            o.jsx('img', {
              className: 'w-full md:max-w-[480px]',
              src: q.contact_img,
              alt: 'Contact Image',
            }),
            o.jsxs('div', {
              className: 'flex flex-col justify-center items-start gap-6',
              children: [
                o.jsx('p', {
                  className: 'font-semibold text-xl text-gray-600',
                  children: 'Reach Out to Us',
                }),
                o.jsxs('p', {
                  className: ' text-gray-500',
                  children: [
                    "Media: @dammy's kitchen ",
                    o.jsx('br', {}),
                    ' Email:',
                    ' ',
                    o.jsx('a', {
                      href: 'mailto:Damilolabisola85@gmail.com',
                      children: 'Damilolabisola85@gmail.com',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        o.jsxs('div', {
          className: ' text-center',
          children: [
            o.jsx('p', {
              className: 'text-2xl font-medium text-gray-800',
              children: 'Request A Quote',
            }),
            o.jsx(Sr, { isLoading: t }),
            o.jsxs('form', {
              className:
                'w-full sm:w-1/2 flex flex-col gap-4 mx-auto my-6 border p-3',
              onSubmit: i,
              children: [
                o.jsx('input', {
                  className: 'w-full outline-none border p-2',
                  type: 'text',
                  placeholder: 'Enter your name',
                  name: 'name',
                  value: r.name,
                  onChange: a,
                  required: !0,
                }),
                o.jsx('input', {
                  className: 'w-full outline-none border p-2',
                  type: 'email',
                  placeholder: 'Enter your email',
                  name: 'email',
                  value: r.email,
                  onChange: a,
                  required: !0,
                }),
                o.jsx('input', {
                  className: 'w-full outline-none border p-2',
                  type: 'tel',
                  placeholder: 'Enter your Phone Number',
                  name: 'phone',
                  value: r.phone,
                  onChange: a,
                  required: !0,
                }),
                o.jsx('textarea', {
                  className: 'w-full outline-none border p-2',
                  placeholder: 'Enter your Message',
                  name: 'message',
                  value: r.message,
                  onChange: a,
                  required: !0,
                  rows: '4',
                }),
                o.jsx('button', {
                  type: 'submit',
                  className:
                    'bg-black text-white text-xs px-10 py-4 self-center',
                  children: 'Request',
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  ia = ({ category: e, subCategory: t }) => {
    const { products: n } = b.useContext(K),
      [r, s] = b.useState([]);
    return (
      b.useEffect(() => {
        if (n.length > 0) {
          let a = n.slice();
          (a = a.filter((i) => e === i.category)),
            (a = a.filter((i) => t === i.subCategory)),
            s(a.slice(0, 5));
        }
      }, [n]),
      o.jsxs('div', {
        className: 'my-24',
        children: [
          o.jsx('div', {
            className: ' text-center text-3xl py-2',
            children: o.jsx(Z, { text1: 'RELATED', text2: 'PRODUCTS' }),
          }),
          o.jsx('div', {
            className:
              'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6',
            children: r.map((a, i) =>
              o.jsx(
                nt,
                { id: a._id, name: a.name, price: a.price, image: a.image },
                i
              )
            ),
          }),
        ],
      })
    );
  },
  ca = () => {
    const { productId: e } = qr(),
      { products: t, currency: n, addToCart: r } = b.useContext(K),
      [s, a] = b.useState(!1),
      [i, c] = b.useState(''),
      [l, u] = b.useState(''),
      [d, p] = b.useState([]),
      [x, A] = b.useState([]),
      [m, g] = b.useState(0);
    return (
      b.useEffect(() => {
        (async () => {
          t.map((y) => {
            if (y._id === e)
              return a(y), c(y.image[0]), y.price && g(y.price || 0), null;
          });
        })();
      }, [e, t]),
      b.useEffect(() => {
        s &&
          (() => {
            let y = s?.price || 0,
              w = 0;
            if (l) {
              const j = s.containerSizes.find((R) => R.size === l);
              j && (y = j.price);
            }
            if (d.length > 0) {
              const j = d.reduce((R, P) => R + (P.price || 0), 0);
              w += j;
            }
            const E = y + w;
            g(E);
          })();
      }, [l, d, s]),
      s
        ? o.jsxs('div', {
            className:
              'border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100',
            children: [
              o.jsxs('div', {
                className: 'flex gap-12 sm:gap-12 flex-col sm:flex-row',
                children: [
                  o.jsxs('div', {
                    className: 'flex-1 flex flex-col-reverse gap-3 sm:flex-row',
                    children: [
                      o.jsx('div', {
                        className:
                          'flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-start sm:w-[18.7%] w-full',
                        children: s.image.map((f, y) =>
                          o.jsx(
                            'div',
                            {
                              className: `relative w-[75px] h-[75px] sm:w-full sm:h-[100px] mb-2 md:mx-0 mx-2 flex-shrink-0 cursor-pointer   ${
                                f === i
                                  ? 'border-2 border-black rounded-md'
                                  : 'hover:opacity-80'
                              }`,
                              onClick: () => c(f),
                              children: o.jsx('img', {
                                src: f,
                                alt: `Thumbnail ${y + 1}`,
                                className:
                                  'w-full h-full object-cover rounded-md',
                              }),
                            },
                            y
                          )
                        ),
                      }),
                      o.jsx('div', {
                        className: 'w-full sm:w-[80%] max-w-[600px] mx-auto',
                        children: o.jsx('div', {
                          className: 'relative w-full h-[400px]',
                          children: o.jsx('img', {
                            className: 'w-full h-full object-cover rounded-md',
                            src: i,
                            alt: 'Selected Product Image',
                          }),
                        }),
                      }),
                    ],
                  }),
                  o.jsx('div', {
                    className: 'flex-1',
                    children: o.jsx('div', {
                      className: 'flex flex-col sm:flex-row gap-3',
                      children: o.jsxs('div', {
                        className: 'flex-1',
                        children: [
                          o.jsx('h1', {
                            className: 'font-medium text-2xl mt-2',
                            children: s.name,
                          }),
                          o.jsxs('p', {
                            className: 'mt-5 text-3xl font-medium',
                            children: [
                              o.jsx('span', {
                                className: 'font-light text-xl',
                                children: 'min',
                              }),
                              ' ',
                              n,
                              s.price,
                            ],
                          }),
                          o.jsx('p', {
                            className: 'mt-5 text-gray-500 md:w-4/5',
                            children: s?.description,
                          }),
                          o.jsxs('div', {
                            className: 'my-8',
                            children: [
                              o.jsx('p', { children: 'Select Extra Protein' }),
                              o.jsx('div', {
                                className: 'relative max-w-[600px]',
                                children: o.jsx('div', {
                                  id: 'protein-scroll-container',
                                  className:
                                    'grid md:grid-rows-4 grid-rows-1 md:grid-flow-col grid-flow-row gap-2 overflow-x-auto max-w-full whitespace-nowrap',
                                  style: { overflowY: 'hidden' },
                                  children: s.proteins.map((f) =>
                                    o.jsx(
                                      'div',
                                      {
                                        onClick: () => {
                                          p((y) =>
                                            y.some((w) => w._id === f._id)
                                              ? y.filter((w) => w._id !== f._id)
                                              : [...y, f]
                                          );
                                        },
                                        className: `border py-1 px-4 bg-gray-100 cursor-pointer rounded-md ${
                                          d.some((y) => y._id === f._id)
                                            ? 'border-orange-500'
                                            : ''
                                        }`,
                                        children: o.jsx('div', {
                                          className: '',
                                          children: o.jsxs('div', {
                                            className:
                                              'flex flex-row justify-between items-center',
                                            children: [
                                              o.jsxs('p', {
                                                className: 'text-sm',
                                                children: [
                                                  f.name,
                                                  ' ',
                                                  o.jsx('br', {}),
                                                  ' +£',
                                                  f.price,
                                                  ' ',
                                                ],
                                              }),
                                              o.jsx('button', {
                                                className: ` px-2 rounded-full z-10 bg-white text-xl font-light duration-300 transition-transform ${
                                                  d.some((y) => y._id === f._id)
                                                    ? 'transform scale-100 transition-all duration-300 ease-in-out animate-rotate-360'
                                                    : 'transform scale-100'
                                                }`,
                                                children: d.some(
                                                  (y) => y._id === f._id
                                                )
                                                  ? o.jsx('p', {
                                                      className:
                                                        'text-orange-500 ',
                                                      children: '✓',
                                                    })
                                                  : o.jsx('p', {
                                                      className:
                                                        'text-orange-500 ',
                                                      children: '+',
                                                    }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      },
                                      f._id
                                    )
                                  ),
                                }),
                              }),
                            ],
                          }),
                          o.jsxs('div', {
                            className: 'my-8',
                            children: [
                              o.jsx('p', { children: 'Select Spice Level' }),
                              o.jsx('div', {
                                className: 'flex gap-2 flex-wrap',
                                children: s.spiceLevels.map((f) =>
                                  o.jsx(
                                    'div',
                                    {
                                      onClick: () => A(f),
                                      children: o.jsxs('div', {
                                        className:
                                          'flex items-center justify-center px-3 py-1 cursor-pointer rounded  ',
                                        style: {
                                          backgroundColor:
                                            x === f ? 'red' : '#e2e8f0',
                                          transition:
                                            'background-color 0.3s ease-in-out',
                                          borderRadius: '0.375rem',
                                          cursor: 'pointer',
                                        },
                                        children: [
                                          Array.from({ length: f }, (y, w) =>
                                            o.jsx(
                                              'span',
                                              {
                                                className:
                                                  'text-red-500 text-lg',
                                                children: '🌶️',
                                              },
                                              w
                                            )
                                          ),
                                          f === 0 &&
                                            o.jsx('p', {
                                              className: 'text-gray-600',
                                              children: 'Mild',
                                            }),
                                        ],
                                      }),
                                    },
                                    f
                                  )
                                ),
                              }),
                            ],
                          }),
                          o.jsxs('div', {
                            className: 'my-8',
                            children: [
                              o.jsx('p', { children: 'Select Size' }),
                              o.jsx('div', {
                                className: 'flex gap-2 flex-wrap',
                                children: s.containerSizes.map((f) =>
                                  o.jsxs(
                                    'button',
                                    {
                                      onClick: () => u(f.size),
                                      className: `border py-2 px-4  rounded-md ${
                                        f.size === l
                                          ? 'border-orange-500  border-2'
                                          : 'bg-gray-100'
                                      }`,
                                      children: [
                                        f.size,
                                        ' ',
                                        o.jsx('br', {}),
                                        ' (£',
                                        f.price,
                                        ')',
                                      ],
                                    },
                                    f.size
                                  )
                                ),
                              }),
                            ],
                          }),
                          o.jsxs('p', {
                            children: ['Total Price: ', n, ' ', m],
                          }),
                          ' ',
                          o.jsx('br', {}),
                          o.jsx('button', {
                            onClick: () =>
                              r(
                                s._id,
                                m,
                                x,
                                {
                                  size: l,
                                  price: s.containerSizes.find(
                                    (f) => f.size === l
                                  )?.price,
                                },
                                d
                              ),
                            className:
                              'bg-black text-white px-8 py-3 text-sm active:bg-gray-700',
                            children: 'ADD TO CART',
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              o.jsx(ia, { category: s.category, subCategory: s.subCategory }),
            ],
          })
        : o.jsx('div', { className: 'opacity-0' })
    );
  },
  Dr = () => {
    const { currency: e, delivery_fee: t, getCartAmount: n } = b.useContext(K);
    return o.jsxs('div', {
      className: 'w-full',
      children: [
        o.jsx('div', {
          className: 'text-2xl',
          children: o.jsx(Z, { text1: 'CART', text2: 'TOTALS' }),
        }),
        o.jsxs('div', {
          className: 'flex flex-col gap-2 mt-2 text-sm',
          children: [
            o.jsxs('div', {
              className: 'flex justify-between',
              children: [
                o.jsx('p', { children: 'Subtotal' }),
                o.jsxs('p', { children: [e, ' ', n(), '.00'] }),
              ],
            }),
            o.jsx('hr', {}),
            o.jsxs('div', {
              className: 'flex justify-between',
              children: [
                o.jsx('p', { children: 'Shipping Fee' }),
                o.jsxs('p', { children: [e, ' ', t, '.00'] }),
              ],
            }),
            o.jsx('hr', {}),
            o.jsxs('div', {
              className: 'flex justify-between',
              children: [
                o.jsx('b', { children: 'Total' }),
                o.jsxs('b', {
                  children: [e, ' ', n() === 0 ? 0 : n() + t, '.00'],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  la = () => {
    const {
        products: e,
        currency: t,
        cartItems: n,
        updateQuantity: r,
        navigate: s,
      } = b.useContext(K),
      [a, i] = b.useState([]);
    return (
      b.useEffect(() => {
        if (e.length > 0) {
          const c = [];
          Object.entries(n).forEach(([l, u]) => {
            Object.entries(u).forEach(([d, p]) => {
              const x = p.size,
                A = p.protein,
                m = p.spiceLevel,
                g = p.quantity,
                f = p.totalPrice,
                y = e.find((w) => w._id === l);
              y &&
                g > 0 &&
                c.push({
                  _id: l,
                  size: x,
                  protein: A,
                  spiceLevel: m,
                  quantity: g,
                  totalPrice: f,
                  productData: y,
                });
            });
          }),
            i(c);
        }
      }, [n, e]),
      o.jsxs('div', {
        className: 'border-t pt-14',
        children: [
          o.jsx('div', {
            className: 'text-2xl mb-3',
            children: o.jsx(Z, { text1: 'YOUR', text2: 'CART' }),
          }),
          o.jsx('div', {
            children:
              Array.isArray(a) && a.length > 0
                ? a.map((c, l) => {
                    const {
                      productData: u,
                      size: d,
                      protein: p,
                      spiceLevel: x,
                      quantity: A,
                      totalPrice: m,
                    } = c;
                    return o.jsxs(
                      'div',
                      {
                        className:
                          'py-8 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4',
                        children: [
                          o.jsxs('div', {
                            className: 'flex items-start gap-6',
                            children: [
                              o.jsx('img', {
                                className: 'w-16 sm:w-20',
                                src: u.image[0],
                                alt: u.name,
                              }),
                              o.jsxs('div', {
                                children: [
                                  o.jsx('p', {
                                    className: 'text-xs sm:text-lg font-medium',
                                    children: u.name,
                                  }),
                                  o.jsxs('div', {
                                    className: 'flex items-center gap-5 mt-2',
                                    children: [
                                      o.jsxs('p', { children: [t, m] }),
                                      o.jsx('p', {
                                        className:
                                          'px-2 sm:px-3 sm:py-1  rounded-md md:block hidden',
                                        children: d.size,
                                      }),
                                      o.jsxs('p', {
                                        className:
                                          'px-2 sm:px-3 sm:py-1  cursor-not-allowed rounded-md md:block hidden',
                                        children: [
                                          'Spice:',
                                          ' ',
                                          x > 0 ? '🌶️'.repeat(x) : 'Mild',
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsx('input', {
                            onChange: (g) =>
                              g.target.value === '' || g.target.value === '0'
                                ? null
                                : r(
                                    c._id,
                                    d.size,
                                    p.map((f) => f.name).join(', '),
                                    x,
                                    Number(g.target.value),
                                    m
                                  ),
                            className:
                              'border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded-md',
                            type: 'number',
                            min: 1,
                            defaultValue: A,
                          }),
                          o.jsx('img', {
                            onClick: () =>
                              r(
                                c._id,
                                d.size,
                                p.map((g) => g.name).join(', '),
                                x,
                                0,
                                m
                              ),
                            className: 'w-4 mr-4 sm:w-5 cursor-pointer',
                            src: q.bin_icon,
                            alt: 'Delete',
                          }),
                          o.jsxs('div', {
                            className: 'flex flex-col gap-4 items-start',
                            children: [
                              o.jsxs('p', {
                                className:
                                  ' sm:py-1  rounded-md md:hidden block',
                                children: [
                                  o.jsx('span', {
                                    className: 'text-base font-semibold',
                                    children: 'Container Size:',
                                  }),
                                  ' ',
                                  d.size,
                                ],
                              }),
                              o.jsxs('p', {
                                className:
                                  ' sm:py-1  cursor-not-allowed rounded-md md:hidden block',
                                children: [
                                  o.jsx('span', {
                                    className: 'text-base font-semibold',
                                    children: 'Spice:',
                                  }),
                                  ' ',
                                  x > 0 ? '🌶️'.repeat(x) : 'Mild',
                                ],
                              }),
                              o.jsx('p', {
                                className: 'text-base font-semibold',
                                children: 'Extra Proteins',
                              }),
                              o.jsx('div', {
                                className:
                                  'grid md:grid-cols-3 grid-cols-1  md:max-w-[600px]',
                                children: p.map((g, f) =>
                                  o.jsx(
                                    'span',
                                    {
                                      className:
                                        'px-2 py-2 sm:px-3 sm:py-1  border bg-slate-50 cursor-not-allowed ',
                                      children: o.jsxs('div', {
                                        className:
                                          'flex  flex-row justify-between items-center',
                                        children: [
                                          o.jsx('span', { children: g.name }),
                                          o.jsxs('span', {
                                            children: [t, g.price],
                                          }),
                                        ],
                                      }),
                                    },
                                    f
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      },
                      l
                    );
                  })
                : o.jsx('p', { children: 'Your cart is empty!' }),
          }),
          o.jsx('div', {
            className: 'flex justify-end my-20',
            children: o.jsxs('div', {
              className: 'w-full sm:w-[450px]',
              children: [
                o.jsx(Dr, {}),
                o.jsx('div', {
                  className: 'w-full text-end',
                  children: o.jsx('button', {
                    onClick: () => s('/place-order'),
                    className: 'bg-black text-white text-sm my-8 px-8 py-3',
                    children: 'PROCEED TO CHECKOUT',
                  }),
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  da = () => {
    const [e, t] = b.useState('Login'),
      { token: n, setToken: r, navigate: s, backendUrl: a } = b.useContext(K),
      [i, c] = b.useState(''),
      [l, u] = b.useState(''),
      [d, p] = b.useState(''),
      x = async (A) => {
        A.preventDefault();
        try {
          if (e === 'Sign Up') {
            const m = await k.post(a + '/api/user/register', {
              name: i,
              email: d,
              password: l,
            });
            m.data.success
              ? (r(m.data.token), localStorage.setItem('token', m.data.token))
              : N.error(m.data.message);
          } else {
            const m = await k.post(a + '/api/user/login', {
              email: d,
              password: l,
            });
            m.data.success
              ? (r(m.data.token), localStorage.setItem('token', m.data.token))
              : N.error(m.data.message);
          }
        } catch (m) {
          console.log(m), N.error(m.message);
        }
      };
    return (
      b.useEffect(() => {
        n && s('/');
      }, [n]),
      o.jsxs('form', {
        onSubmit: x,
        className:
          'flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800',
        children: [
          o.jsxs('div', {
            className: 'inline-flex items-center gap-2 mb-2 mt-10',
            children: [
              o.jsx('p', { className: 'prata-regular text-3xl', children: e }),
              o.jsx('hr', {
                className: 'border-none h-[1.5px] w-8 bg-gray-800',
              }),
            ],
          }),
          e === 'Login'
            ? ''
            : o.jsx('input', {
                onChange: (A) => c(A.target.value),
                value: i,
                type: 'text',
                className: 'w-full px-3 py-2 border border-gray-800',
                placeholder: 'Name',
                required: !0,
              }),
          o.jsx('input', {
            onChange: (A) => p(A.target.value),
            value: d,
            type: 'email',
            className: 'w-full px-3 py-2 border border-gray-800',
            placeholder: 'Email',
            required: !0,
          }),
          o.jsx('input', {
            onChange: (A) => u(A.target.value),
            value: l,
            type: 'password',
            className: 'w-full px-3 py-2 border border-gray-800',
            placeholder: 'Password',
            required: !0,
          }),
          o.jsxs('div', {
            className: 'w-full flex justify-between text-sm mt-[-8px]',
            children: [
              o.jsx('p', {
                className: ' cursor-pointer',
                children: 'Forgot your password?',
              }),
              e === 'Login'
                ? o.jsx('p', {
                    onClick: () => t('Sign Up'),
                    className: ' cursor-pointer',
                    children: 'Create account',
                  })
                : o.jsx('p', {
                    onClick: () => t('Login'),
                    className: ' cursor-pointer',
                    children: 'Login Here',
                  }),
            ],
          }),
          o.jsx('button', {
            className: 'bg-black text-white font-light px-8 py-2 mt-4',
            children: e === 'Login' ? 'Sign In' : 'Sign Up',
          }),
        ],
      })
    );
  },
  ua = () => {
    const [e, t] = b.useState('cod'),
      {
        navigate: n,
        backendUrl: r,
        token: s,
        cartItems: a,
        setCartItems: i,
        getCartAmount: c,
        delivery_fee: l,
        products: u,
      } = b.useContext(K),
      [d, p] = b.useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',
      }),
      x = (g) => {
        const f = g.target.name,
          y = g.target.value;
        p((w) => ({ ...w, [f]: y }));
      },
      A = (g) => {
        const f = {
          key: '-------- Paste Razorpay key Id --------',
          amount: g.amount,
          currency: g.currency,
          name: 'Order Payment',
          description: 'Order Payment',
          order_id: g.id,
          receipt: g.receipt,
          handler: async (w) => {
            console.log(w);
            try {
              const { data: E } = await k.post(
                r + '/api/order/verifyRazorpay',
                w,
                { headers: { token: s } }
              );
              E.success && (n('/orders'), i({}));
            } catch (E) {
              console.log(E), N.error(E);
            }
          },
        };
        new window.Razorpay(f).open();
      },
      m = async (g) => {
        g.preventDefault();
        try {
          let f = [];
          if (!s) {
            n('/login');
            return;
          }
          for (const w in a) {
            const E = a[w];
            for (const j in E) {
              const R = E[j];
              if (R.quantity > 0) {
                const P = u.find((L) => L._id === w);
                if (P) {
                  const L = {
                    productId: w,
                    name: P.name,
                    image: P.image,
                    size: R.size.size,
                    price: R.size.price,
                    quantity: R.quantity,
                    proteins: R.protein,
                    spiceLevel: R.spiceLevel,
                    totalPrice: R.totalPrice,
                  };
                  f.push(L);
                }
              }
            }
          }
          console.log('Order Items:', f);
          let y = { address: d, items: f, amount: c() + l };
          switch (e) {
            case 'cod':
              const w = await k.post(r + '/api/order/place', y, {
                headers: { token: s },
              });
              w.data.success ? (i({}), n('/orders')) : N.error(w.data.message);
              break;
            case 'stripe':
              const E = await k.post(r + '/api/order/stripe', y, {
                headers: { token: s },
              });
              if (E.data.success) {
                const { session_url: R } = E.data;
                window.location.replace(R);
              } else N.error(E.data.message);
              break;
            case 'razorpay':
              const j = await k.post(r + '/api/order/razorpay', y, {
                headers: { token: s },
              });
              j.data.success && A(j.data.order);
              break;
            default:
              break;
          }
        } catch (f) {
          console.log(f), N.error(f.message);
        }
      };
    return (
      b.useEffect(() => {
        s ||
          (N.warning('You need to login to perform this action'), n('/login'));
      }, [n, s]),
      o.jsxs('form', {
        onSubmit: m,
        className:
          'flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t',
        children: [
          o.jsxs('div', {
            className: 'flex flex-col gap-4 w-full sm:max-w-[480px]',
            children: [
              o.jsx('div', {
                className: 'text-xl sm:text-2xl my-3',
                children: o.jsx(Z, { text1: 'DELIVERY', text2: 'INFORMATION' }),
              }),
              o.jsxs('div', {
                className: 'flex gap-3',
                children: [
                  o.jsx('input', {
                    required: !0,
                    onChange: x,
                    name: 'firstName',
                    value: d.firstName,
                    className:
                      'border border-gray-300 rounded py-1.5 px-3.5 w-full',
                    type: 'text',
                    placeholder: 'First name',
                  }),
                  o.jsx('input', {
                    required: !0,
                    onChange: x,
                    name: 'lastName',
                    value: d.lastName,
                    className:
                      'border border-gray-300 rounded py-1.5 px-3.5 w-full',
                    type: 'text',
                    placeholder: 'Last name',
                  }),
                ],
              }),
              o.jsx('input', {
                required: !0,
                onChange: x,
                name: 'email',
                value: d.email,
                className:
                  'border border-gray-300 rounded py-1.5 px-3.5 w-full',
                type: 'email',
                placeholder: 'Email address',
              }),
              o.jsx('input', {
                required: !0,
                onChange: x,
                name: 'street',
                value: d.street,
                className:
                  'border border-gray-300 rounded py-1.5 px-3.5 w-full',
                type: 'text',
                placeholder: 'Street',
              }),
              o.jsxs('div', {
                className: 'flex gap-3',
                children: [
                  o.jsx('input', {
                    required: !0,
                    onChange: x,
                    name: 'city',
                    value: d.city,
                    className:
                      'border border-gray-300 rounded py-1.5 px-3.5 w-full',
                    type: 'text',
                    placeholder: 'City',
                  }),
                  o.jsx('input', {
                    onChange: x,
                    name: 'state',
                    value: d.state,
                    className:
                      'border border-gray-300 rounded py-1.5 px-3.5 w-full',
                    type: 'text',
                    placeholder: 'State',
                  }),
                ],
              }),
              o.jsxs('div', {
                className: 'flex gap-3',
                children: [
                  o.jsx('input', {
                    required: !0,
                    onChange: x,
                    name: 'zipcode',
                    value: d.zipcode,
                    className:
                      'border border-gray-300 rounded py-1.5 px-3.5 w-full',
                    type: 'text',
                    placeholder: 'Zipcode',
                  }),
                  o.jsx('input', {
                    required: !0,
                    onChange: x,
                    name: 'country',
                    value: d.country,
                    className:
                      'border border-gray-300 rounded py-1.5 px-3.5 w-full',
                    type: 'text',
                    placeholder: 'Country',
                  }),
                ],
              }),
              o.jsx('input', {
                required: !0,
                onChange: x,
                name: 'phone',
                value: d.phone,
                className:
                  'border border-gray-300 rounded py-1.5 px-3.5 w-full',
                type: 'number',
                placeholder: 'Phone',
              }),
            ],
          }),
          o.jsxs('div', {
            className: 'mt-8',
            children: [
              o.jsx('div', {
                className: 'mt-8 min-w-80',
                children: o.jsx(Dr, {}),
              }),
              o.jsxs('div', {
                className: 'mt-12',
                children: [
                  o.jsx(Z, { text1: 'PAYMENT', text2: 'METHOD' }),
                  o.jsxs('div', {
                    className: 'flex gap-3 flex-col lg:flex-row',
                    children: [
                      o.jsxs('div', {
                        onClick: () => t('stripe'),
                        className:
                          'flex items-center gap-3 border p-2 px-3 cursor-pointer',
                        children: [
                          o.jsx('p', {
                            className: `min-w-3.5 h-3.5 border rounded-full ${
                              e === 'stripe' ? 'bg-green-400' : ''
                            }`,
                          }),
                          o.jsx('img', {
                            className: 'h-5 mx-4',
                            src: q.stripe_logo,
                            alt: '',
                          }),
                        ],
                      }),
                      o.jsxs('div', {
                        onClick: () => t('cod'),
                        className:
                          'flex items-center gap-3 border p-2 px-3 cursor-pointer',
                        children: [
                          o.jsx('p', {
                            className: `min-w-3.5 h-3.5 border rounded-full ${
                              e === 'cod' ? 'bg-green-400' : ''
                            }`,
                          }),
                          o.jsx('p', {
                            className: 'text-gray-500 text-sm font-medium mx-4',
                            children: 'CASH ON DELIVERY',
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsx('div', {
                    className: 'w-full text-end mt-8',
                    children: o.jsx('button', {
                      type: 'submit',
                      className: 'bg-black text-white px-16 py-3 text-sm',
                      children: 'PLACE ORDER',
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  fa = () => {
    const { backendUrl: e, token: t, currency: n } = b.useContext(K),
      [r, s] = b.useState([]),
      a = async () => {
        try {
          if (!t) return null;
          const i = await k.post(
            `${e}/api/order/userorders`,
            {},
            { headers: { token: t } }
          );
          if (i.data.success) {
            const c = i.data.orders.flatMap((l) =>
              l.items.map((u) => ({
                ...u,
                status: l.status,
                payment: l.payment,
                paymentMethod: l.paymentMethod,
                date: l.date,
              }))
            );
            s(c.reverse());
          }
        } catch (i) {
          console.error('Error loading order data:', i);
        }
      };
    return (
      b.useEffect(() => {
        a();
      }, [t]),
      o.jsxs('div', {
        className: 'border-t pt-16',
        children: [
          o.jsx('div', {
            className: 'text-2xl',
            children: o.jsx(Z, { text1: 'MY', text2: 'ORDERS' }),
          }),
          o.jsx('div', {
            children: r.map((i, c) =>
              o.jsxs(
                'div',
                {
                  className:
                    'py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4',
                  children: [
                    o.jsxs('div', {
                      className: 'flex items-start gap-6 text-sm',
                      children: [
                        o.jsx('img', {
                          className: 'w-16 sm:w-20',
                          src: i.image[0],
                          alt: i.name,
                        }),
                        o.jsxs('div', {
                          children: [
                            o.jsx('p', {
                              className: 'sm:text-base font-medium',
                              children: i.name,
                            }),
                            o.jsxs('div', {
                              className:
                                'flex items-center gap-3 mt-1 text-base text-gray-700',
                              children: [
                                o.jsxs('p', { children: [n, i.price] }),
                                o.jsxs('p', {
                                  children: ['Quantity: ', i.quantity],
                                }),
                                o.jsxs('p', { children: ['Size: ', i.size] }),
                              ],
                            }),
                            o.jsxs('p', {
                              className: 'mt-1',
                              children: [
                                'Date:',
                                ' ',
                                o.jsx('span', {
                                  className: 'text-gray-400',
                                  children: new Date(i.date).toDateString(),
                                }),
                              ],
                            }),
                            o.jsxs('p', {
                              className: 'mt-1',
                              children: [
                                'Payment:',
                                ' ',
                                o.jsx('span', {
                                  className: 'text-gray-400',
                                  children: i.paymentMethod,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs('div', {
                      className: 'md:w-1/2 flex justify-between',
                      children: [
                        o.jsxs('div', {
                          className: 'flex items-center gap-2',
                          children: [
                            o.jsx('p', {
                              className:
                                'min-w-2 h-2 rounded-full bg-green-500',
                            }),
                            o.jsx('p', {
                              className: 'text-sm md:text-base',
                              children: i.status,
                            }),
                          ],
                        }),
                        o.jsx('button', {
                          onClick: a,
                          className:
                            'border px-4 py-2 text-sm font-medium rounded-sm',
                          children: 'Track Order',
                        }),
                      ],
                    }),
                  ],
                },
                c
              )
            ),
          }),
        ],
      })
    );
  },
  pa = () => {
    const [e, t] = b.useState(!1),
      {
        setShowSearch: n,
        getCartCount: r,
        navigate: s,
        token: a,
        setToken: i,
        setCartItems: c,
      } = b.useContext(K),
      l = () => {
        s('/login'), localStorage.removeItem('token'), i(''), c({});
      };
    return o.jsxs('div', {
      className: 'flex items-center justify-between py-5 font-medium',
      children: [
        o.jsx(pe, {
          to: '/',
          children: o.jsx('img', {
            src: q.logo,
            className: 'w-36',
            alt: 'DammyKitchen Logo',
          }),
        }),
        o.jsxs('ul', {
          className: 'hidden sm:flex gap-5 text-sm text-gray-700',
          children: [
            o.jsxs(le, {
              to: '/',
              className: 'flex flex-col items-center gap-1',
              children: [
                o.jsx('p', { children: 'HOME' }),
                o.jsx('hr', {
                  className: 'w-2/4 border-none h-[1.5px] bg-gray-700 hidden',
                }),
              ],
            }),
            o.jsxs(le, {
              to: '/collection',
              className: 'flex flex-col items-center gap-1',
              children: [
                o.jsx('p', { children: 'COLLECTION' }),
                o.jsx('hr', {
                  className: 'w-2/4 border-none h-[1.5px] bg-gray-700 hidden',
                }),
              ],
            }),
            o.jsxs(le, {
              to: '/about',
              className: 'flex flex-col items-center gap-1',
              children: [
                o.jsx('p', { children: 'ABOUT' }),
                o.jsx('hr', {
                  className: 'w-2/4 border-none h-[1.5px] bg-gray-700 hidden',
                }),
              ],
            }),
            o.jsxs(le, {
              to: '/contact',
              className: 'flex flex-col items-center gap-1',
              children: [
                o.jsx('p', { children: 'CONTACT' }),
                o.jsx('hr', {
                  className: 'w-2/4 border-none h-[1.5px] bg-gray-700 hidden',
                }),
              ],
            }),
          ],
        }),
        o.jsxs('div', {
          className: 'flex items-center gap-6',
          children: [
            o.jsx('img', {
              onClick: () => {
                n(!0), s('/collection');
              },
              src: q.search_icon,
              className: 'w-5 cursor-pointer',
              alt: 'Search',
            }),
            o.jsxs('div', {
              className: 'group relative',
              children: [
                o.jsx('img', {
                  onClick: () => (a ? null : s('/login')),
                  className: 'w-5 cursor-pointer',
                  src: q.profile_icon,
                  alt: 'Profile',
                }),
                a &&
                  o.jsx('div', {
                    className:
                      'group-hover:block hidden absolute dropdown-menu right-0 pt-4',
                    children: o.jsxs('div', {
                      className:
                        'flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded',
                      children: [
                        o.jsx('p', {
                          onClick: () => s('/orders'),
                          className: 'cursor-pointer hover:text-black',
                          children: 'Orders',
                        }),
                        o.jsx('p', {
                          onClick: l,
                          className: 'cursor-pointer hover:text-black',
                          children: 'Logout',
                        }),
                      ],
                    }),
                  }),
              ],
            }),
            a &&
              o.jsxs(pe, {
                to: '/cart',
                className: 'relative',
                children: [
                  o.jsx('img', {
                    src: q.cart_icon,
                    className: 'w-5 min-w-5',
                    alt: 'Cart',
                  }),
                  o.jsx('p', {
                    className:
                      'absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]',
                    children: r(),
                  }),
                ],
              }),
            o.jsx('img', {
              onClick: () => t(!0),
              src: q.menu_icon,
              className: 'w-5 cursor-pointer sm:hidden',
              alt: 'menu',
            }),
          ],
        }),
        o.jsx('div', {
          className: `absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            e ? 'w-full' : 'w-0'
          }`,
          children: o.jsxs('div', {
            className: 'flex flex-col text-gray-600',
            children: [
              o.jsxs('div', {
                onClick: () => t(!1),
                className: 'flex items-center gap-4 p-3 cursor-pointer',
                children: [
                  o.jsx('img', {
                    className: 'h-4 rotate-180',
                    src: q.dropdown_icon,
                    alt: 'Dropdown',
                  }),
                  o.jsx('p', { children: 'Back' }),
                ],
              }),
              o.jsx(le, {
                onClick: () => t(!1),
                className: 'py-2 pl-6 border',
                to: '/',
                children: 'HOME',
              }),
              o.jsx(le, {
                onClick: () => t(!1),
                className: 'py-2 pl-6 border',
                to: '/collection',
                children: 'COLLECTION',
              }),
              o.jsx(le, {
                onClick: () => t(!1),
                className: 'py-2 pl-6 border',
                to: '/about',
                children: 'ABOUT',
              }),
              o.jsx(le, {
                onClick: () => t(!1),
                className: 'py-2 pl-6 border',
                to: '/contact',
                children: 'CONTACT',
              }),
            ],
          }),
        }),
      ],
    });
  },
  ma = () =>
    o.jsxs('div', {
      children: [
        o.jsxs('div', {
          className:
            'flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm',
          children: [
            o.jsxs('div', {
              children: [
                o.jsx('img', {
                  src: q.logo,
                  className: 'mb-5 w-32',
                  alt: 'DammyKitchen Logo',
                }),
                o.jsx('p', {
                  className: 'w-full md:w-2/3 text-gray-600',
                  children:
                    "Dammy's kitchen &Catering and Events Ltd is a catering company in UK which specialise in Nigeria cuisine most especially Nigerian cuisine. As a business, the company caters for events such as weddings, birthdays, corporate events,",
                }),
              ],
            }),
            o.jsxs('div', {
              children: [
                o.jsx('p', {
                  className: 'text-xl font-medium mb-5',
                  children: 'COMPANY',
                }),
                o.jsxs('ul', {
                  className: 'flex flex-col gap-1 text-gray-600 cursor-pointer',
                  children: [
                    o.jsxs('li', {
                      children: [' ', o.jsx(pe, { to: '/', children: 'Home' })],
                    }),
                    o.jsx('li', {
                      children: o.jsx(pe, {
                        to: '/about',
                        children: 'About us',
                      }),
                    }),
                    o.jsx('li', {
                      children: o.jsx(pe, {
                        to: '/collection',
                        children: 'Our Services',
                      }),
                    }),
                    o.jsx('li', {
                      children: o.jsx(pe, {
                        to: '/contact',
                        children: 'Contact Us',
                      }),
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs('div', {
              children: [
                o.jsx('p', {
                  className: 'text-xl font-medium mb-5',
                  children: 'GET IN TOUCH',
                }),
                o.jsxs('ul', {
                  className: 'flex flex-col gap-1 text-gray-600',
                  children: [
                    o.jsx('li', { children: "@dammy's kitchen " }),
                    o.jsxs('li', {
                      children: [
                        ' ',
                        o.jsx('a', {
                          href: 'mailto:Damilolabisola85@gmail.com',
                          children: 'Damilolabisola85@gmail.com',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        o.jsxs('div', {
          children: [
            o.jsx('hr', {}),
            o.jsxs('p', {
              className: 'py-5 text-sm text-center',
              children: [
                'Copyright ',
                new Date().getFullYear(),
                ' @dammys kitchen - All Right Reserved.',
              ],
            }),
          ],
        }),
      ],
    }),
  ha = () => {
    const {
        search: e,
        setSearch: t,
        showSearch: n,
        setShowSearch: r,
      } = b.useContext(K),
      [s, a] = b.useState(!1),
      i = zr();
    return (
      b.useEffect(() => {
        i.pathname.includes('collection') ? a(!0) : a(!1);
      }, [i]),
      n && s
        ? o.jsxs('div', {
            className: 'border-t border-b bg-gray-50 text-center',
            children: [
              o.jsxs('div', {
                className:
                  'inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2',
                children: [
                  o.jsx('input', {
                    value: e,
                    onChange: (c) => t(c.target.value),
                    className: 'flex-1 outline-none bg-inherit text-sm',
                    type: 'text',
                    placeholder: 'Search',
                  }),
                  o.jsx('img', {
                    className: 'w-4',
                    src: q.search_icon,
                    alt: 'search',
                  }),
                ],
              }),
              o.jsx('img', {
                onClick: () => r(!1),
                className: 'inline w-3 cursor-pointer',
                src: q.cross_icon,
                alt: 'cross',
              }),
            ],
          })
        : null
    );
  },
  ga = () => {
    const {
        navigate: e,
        token: t,
        setCartItems: n,
        backendUrl: r,
      } = b.useContext(K),
      [s] = Qr(),
      a = s.get('success'),
      i = s.get('orderId');
    return (
      b.useEffect(() => {
        console.log('Success:', a),
          console.log('Order ID:', i),
          a === 'true'
            ? (N.success('Payment successful!'), n({}), e('/orders'))
            : (N.error('Payment failed, please try again.'), e('/cart'));
      }, [a, i, e, n]),
      o.jsx('div', {
        children:
          a === null && o.jsx('div', { children: 'Verifying payment...' }),
      })
    );
  },
  xa = () =>
    o.jsxs('div', {
      className: 'px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]',
      children: [
        o.jsx(Sn, {}),
        o.jsx(pa, {}),
        o.jsx(ha, {}),
        o.jsxs(Kr, {
          children: [
            o.jsx(se, { path: '/', element: o.jsx(na, {}) }),
            o.jsx(se, { path: '/collection', element: o.jsx(sa, {}) }),
            o.jsx(se, { path: '/about', element: o.jsx(oa, {}) }),
            o.jsx(se, { path: '/contact', element: o.jsx(aa, {}) }),
            o.jsx(se, { path: '/product/:productId', element: o.jsx(ca, {}) }),
            o.jsx(se, { path: '/cart', element: o.jsx(la, {}) }),
            o.jsx(se, { path: '/login', element: o.jsx(da, {}) }),
            o.jsx(se, { path: '/place-order', element: o.jsx(ua, {}) }),
            o.jsx(se, { path: '/orders', element: o.jsx(fa, {}) }),
            o.jsx(se, { path: '/verify', element: o.jsx(ga, {}) }),
          ],
        }),
        o.jsx(ma, {}),
      ],
    });
ut.createRoot(document.getElementById('root')).render(
  o.jsx(_r, { children: o.jsx(so, { children: o.jsx(xa, {}) }) })
);
