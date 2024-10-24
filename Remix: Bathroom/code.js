

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["98aaabe3-7862-4d0b-8c67-4a6323b7eaea","d2978abc-379a-474b-b480-5d3102417659","2db57039-8d3b-42f2-b6e2-321bdf18438d","47ab6f4f-fd2d-4655-9a73-8b237c42cab0","9699ba6f-0d4a-4029-ac2b-2310c15c1c86","2434833b-6207-4976-b4f8-c4d679db359c","351475e0-0741-45d3-b15b-c99370b47cf9","e2fe36ed-1373-41d4-b433-a70ea2576de8","8c4d4300-f7b8-4a9d-b21a-6573ec649f44","f027ead2-b257-451c-86d3-0e97e67cbb94","eb038277-e42f-4799-8407-a59c8d701e5d","122852ab-a941-42a7-8d37-ca5c2f022706","6c7d8fa8-afa6-4b70-b8dd-41aa71efab6e","50086612-b342-468d-add5-2b8aff9947c7","2dd83cdd-28d4-4244-a07b-e103e514faae","d9dbf1e2-d93a-4c65-854c-eac159cd283f","ac7c912d-9d19-44a5-a40c-110c23123389","5ce63b95-60f6-44be-9661-0dfdff36c971","bbd00b09-da8a-403c-91bb-748675843b0b","d7bbd078-1725-4647-be9c-3cceb3aa3846","94f00235-8966-4404-b7d3-c5478d4dcb51","8f50561d-660b-40e7-939e-5adb28362ab0","3627fb6a-0646-4e76-a57f-0a64556e95a9","a62354fb-ab6f-45fa-8e65-273abcc39506","1d678a78-d34e-40d0-81ac-d531305f2d41","2fb6b000-d67c-4bb6-9ee1-9b4fb09d4175","9d561ea4-8748-4b11-a8af-f34fd39af570","f42b4ffe-05eb-453e-b815-6ea72ab7ff93","6db23b07-c30c-44fa-be3a-aade2560429f","846cfc68-303a-47b4-af3d-d1eef2ec8e8d","412785f2-cddd-4aa3-b84d-875e2e5cfabe","540256e5-9a5f-4b3d-85b8-f383943de8b1","0bfa56e4-02db-4696-aaad-b31adfcc8b86","9582fbb2-1809-4a77-9e5c-9a7801f7df5d","b91f3c85-ce39-4cf8-bdfd-d5628c060f76","1b9542ed-b621-4de7-9920-e107c9a8fa15","2b7ee685-d35b-4dfa-9744-04b82f6d2cce","b74c81d0-9cff-4ff5-8605-f190be4e8f6f","a9c09665-127b-4dcd-b99e-e1c2ba526e19","f64e07e3-71ab-4424-9744-d793ca29405b","601a64f3-a82d-4d28-b7d5-1402363f38a3","26cf3c2a-502c-41d8-94c0-a3010582b4e5","ad485fab-46cf-4161-a0e5-94a760379ccf","c5f81c58-fe48-402e-990a-1c5c846519fb","85eac19e-8425-4f43-9172-c99cbeec95cc"],"propsByKey":{"98aaabe3-7862-4d0b-8c67-4a6323b7eaea":{"name":"bg","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"F3it773u5lGsXhSIasMEtkR.KjZXKP8Y","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/98aaabe3-7862-4d0b-8c67-4a6323b7eaea.png"},"d2978abc-379a-474b-b480-5d3102417659":{"name":"title","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"_V9Qjvj1ux0YTCM8e_cU9PyvQqVcJHta","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/d2978abc-379a-474b-b480-5d3102417659.png"},"2db57039-8d3b-42f2-b6e2-321bdf18438d":{"name":"urinal","sourceUrl":null,"frameSize":{"x":59,"y":146},"frameCount":1,"looping":true,"frameDelay":12,"version":"mZOrcUJ02ycpG.rK2fcCmqzukRusfVJI","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":146},"rootRelativePath":"assets/2db57039-8d3b-42f2-b6e2-321bdf18438d.png"},"47ab6f4f-fd2d-4655-9a73-8b237c42cab0":{"name":"yellow4","sourceUrl":null,"frameSize":{"x":59,"y":146},"frameCount":1,"looping":true,"frameDelay":12,"version":"ChbL_oXWuUJAtxZpqVJR71w9Xr7QYhm0","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":146},"rootRelativePath":"assets/47ab6f4f-fd2d-4655-9a73-8b237c42cab0.png"},"9699ba6f-0d4a-4029-ac2b-2310c15c1c86":{"name":"yellow3","sourceUrl":null,"frameSize":{"x":59,"y":146},"frameCount":1,"looping":true,"frameDelay":12,"version":"74hXfCjzqxOsscuJErWOb_4PLPt846YS","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":146},"rootRelativePath":"assets/9699ba6f-0d4a-4029-ac2b-2310c15c1c86.png"},"2434833b-6207-4976-b4f8-c4d679db359c":{"name":"yellow2","sourceUrl":null,"frameSize":{"x":59,"y":146},"frameCount":1,"looping":true,"frameDelay":12,"version":"t7N6_xYTalLRW4sSd49eiA0qq6WoPmh.","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":146},"rootRelativePath":"assets/2434833b-6207-4976-b4f8-c4d679db359c.png"},"351475e0-0741-45d3-b15b-c99370b47cf9":{"name":"yellow1","sourceUrl":null,"frameSize":{"x":59,"y":146},"frameCount":1,"looping":true,"frameDelay":12,"version":"shqUULbR8VDIykJ.V.2jDKlJ5vMjzIcf","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":146},"rootRelativePath":"assets/351475e0-0741-45d3-b15b-c99370b47cf9.png"},"e2fe36ed-1373-41d4-b433-a70ea2576de8":{"name":"goldurinal","sourceUrl":null,"frameSize":{"x":59,"y":146},"frameCount":1,"looping":true,"frameDelay":12,"version":"fsTZ1xCTUsUdMCKCXZOsMErzjUwSyNw4","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":146},"rootRelativePath":"assets/e2fe36ed-1373-41d4-b433-a70ea2576de8.png"},"8c4d4300-f7b8-4a9d-b21a-6573ec649f44":{"name":"divider","sourceUrl":null,"frameSize":{"x":80,"y":198},"frameCount":1,"looping":true,"frameDelay":12,"version":"pSxQ5.eWfFWfNTtfMZi4MNPi2Lxzuh4_","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":198},"rootRelativePath":"assets/8c4d4300-f7b8-4a9d-b21a-6573ec649f44.png"},"f027ead2-b257-451c-86d3-0e97e67cbb94":{"name":"level1","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"7UyIJdeRwV9sBY.PjaS1Tsh5uNd2WPWc","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/f027ead2-b257-451c-86d3-0e97e67cbb94.png"},"eb038277-e42f-4799-8407-a59c8d701e5d":{"name":"level2","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"4Uok4nuBDa3rTYFQz7K_9GnSZA03r9vy","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/eb038277-e42f-4799-8407-a59c8d701e5d.png"},"122852ab-a941-42a7-8d37-ca5c2f022706":{"name":"level3","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"Uy9PTNlZkqV29aEx3PGQirBSGYyJyHn7","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/122852ab-a941-42a7-8d37-ca5c2f022706.png"},"6c7d8fa8-afa6-4b70-b8dd-41aa71efab6e":{"name":"level4","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"fMjFPqq0pUIbhPUNy46WZSn1nqrUebQB","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/6c7d8fa8-afa6-4b70-b8dd-41aa71efab6e.png"},"50086612-b342-468d-add5-2b8aff9947c7":{"name":"level5","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"sAwzse5V_JcaQqeu_ouNWr3_5NXumny4","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/50086612-b342-468d-add5-2b8aff9947c7.png"},"2dd83cdd-28d4-4244-a07b-e103e514faae":{"name":"level6","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"vcD9P7TXM6.eOr1PCszGUNysOMXPj6cv","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/2dd83cdd-28d4-4244-a07b-e103e514faae.png"},"d9dbf1e2-d93a-4c65-854c-eac159cd283f":{"name":"level8","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"8k8DNe27sqg4Dzq0bIO.SVIjkPckvGdV","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/d9dbf1e2-d93a-4c65-854c-eac159cd283f.png"},"ac7c912d-9d19-44a5-a40c-110c23123389":{"name":"level7","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"u9BgEjHJjOxJIuDVPoL3Z15cMpbcBVyq","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/ac7c912d-9d19-44a5-a40c-110c23123389.png"},"5ce63b95-60f6-44be-9661-0dfdff36c971":{"name":"level9","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"gsATeQqgqxsu.jaA7toiNe72SYvkIhi.","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/5ce63b95-60f6-44be-9661-0dfdff36c971.png"},"bbd00b09-da8a-403c-91bb-748675843b0b":{"name":"level10","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"l.I0R0mMMLsHVUcCH21RBoUCO6hjR0PQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/bbd00b09-da8a-403c-91bb-748675843b0b.png"},"d7bbd078-1725-4647-be9c-3cceb3aa3846":{"name":"level11","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":10,"version":"uSyLZMkoTUTaJcWdF3WnaecV1M89ZvKL","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/d7bbd078-1725-4647-be9c-3cceb3aa3846.png"},"94f00235-8966-4404-b7d3-c5478d4dcb51":{"name":"level12","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"_r.Bu8YgkaXctQ464YAVac22BElKWBIO","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/94f00235-8966-4404-b7d3-c5478d4dcb51.png"},"8f50561d-660b-40e7-939e-5adb28362ab0":{"name":"level13","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"DR89z_xP95Tamyu9Q8.cz2T.DdyAC4hX","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/8f50561d-660b-40e7-939e-5adb28362ab0.png"},"3627fb6a-0646-4e76-a57f-0a64556e95a9":{"name":"level14","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"XM0xqhySymZqhlXOM7Vf_YkBwnPKzvaQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/3627fb6a-0646-4e76-a57f-0a64556e95a9.png"},"a62354fb-ab6f-45fa-8e65-273abcc39506":{"name":"level15","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"I3pEkdHFhwcbDIp1Cn1faPWWGKKCeyQE","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/a62354fb-ab6f-45fa-8e65-273abcc39506.png"},"1d678a78-d34e-40d0-81ac-d531305f2d41":{"name":"level16","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"jiDLfx7jULMU0hpT7SWhelLW8tbjNILz","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/1d678a78-d34e-40d0-81ac-d531305f2d41.png"},"2fb6b000-d67c-4bb6-9ee1-9b4fb09d4175":{"name":"level17","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"VOW89P32Q90mJasPJWDM.Q7lUcGz3oqj","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/2fb6b000-d67c-4bb6-9ee1-9b4fb09d4175.png"},"9d561ea4-8748-4b11-a8af-f34fd39af570":{"name":"level18","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"GIvo56ZG2Afabup6bC36xB6ApozDPnNC","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/9d561ea4-8748-4b11-a8af-f34fd39af570.png"},"f42b4ffe-05eb-453e-b815-6ea72ab7ff93":{"name":"title_text","sourceUrl":"assets/v3/animations/svUeWAY7T2pTbd7UHUX_CVA5j4JvA55uKvOcqrws7fc/f42b4ffe-05eb-453e-b815-6ea72ab7ff93.png","frameSize":{"x":116,"y":32},"frameCount":1,"looping":true,"frameDelay":4,"version":"s7KI2b_.Z5XJFH3xW5h01jh.lB2GmeyB","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":116,"y":32},"rootRelativePath":"assets/v3/animations/svUeWAY7T2pTbd7UHUX_CVA5j4JvA55uKvOcqrws7fc/f42b4ffe-05eb-453e-b815-6ea72ab7ff93.png"},"6db23b07-c30c-44fa-be3a-aade2560429f":{"name":"start","sourceUrl":"assets/api/v1/animation-library/gamelab/.uhRrRsrbkYr5RW1NETgh8NrYZNQkRmB/category_icons/play.png","frameSize":{"x":384,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":".uhRrRsrbkYr5RW1NETgh8NrYZNQkRmB","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.uhRrRsrbkYr5RW1NETgh8NrYZNQkRmB/category_icons/play.png"},"846cfc68-303a-47b4-af3d-d1eef2ec8e8d":{"name":"person1","sourceUrl":null,"frameSize":{"x":137,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"9PfVfw3jHkP0OY_.rZ90cKL.J9tuBWLd","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":137,"y":400},"rootRelativePath":"assets/846cfc68-303a-47b4-af3d-d1eef2ec8e8d.png"},"412785f2-cddd-4aa3-b84d-875e2e5cfabe":{"name":"person2","sourceUrl":null,"frameSize":{"x":126,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"3WehFGZxRebFUOVSJS86pk_QzWZn8G1X","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":400},"rootRelativePath":"assets/412785f2-cddd-4aa3-b84d-875e2e5cfabe.png"},"540256e5-9a5f-4b3d-85b8-f383943de8b1":{"name":"correct","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZZZJH9gK_7ldIUek79ewdWMTV.CpW0IV","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/540256e5-9a5f-4b3d-85b8-f383943de8b1.png"},"0bfa56e4-02db-4696-aaad-b31adfcc8b86":{"name":"incorrect","sourceUrl":"assets/v3/animations/svUeWAY7T2pTbd7UHUX_CVA5j4JvA55uKvOcqrws7fc/0bfa56e4-02db-4696-aaad-b31adfcc8b86.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"hrth.FVD2NkezF6mycTEh1fVwdVzSOCz","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/svUeWAY7T2pTbd7UHUX_CVA5j4JvA55uKvOcqrws7fc/0bfa56e4-02db-4696-aaad-b31adfcc8b86.png"},"9582fbb2-1809-4a77-9e5c-9a7801f7df5d":{"name":"back","sourceUrl":"assets/api/v1/animation-library/gamelab/M.69EHPHiaoiKPkuu9B8QdGZQ7gE9LtK/category_icons/fastforward.png","frameSize":{"x":384,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":"M.69EHPHiaoiKPkuu9B8QdGZQ7gE9LtK","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/M.69EHPHiaoiKPkuu9B8QdGZQ7gE9LtK/category_icons/fastforward.png"},"b91f3c85-ce39-4cf8-bdfd-d5628c060f76":{"name":"person3","sourceUrl":null,"frameSize":{"x":119,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"iFoqqUrTy9pFMnWEdYSZhIEFGxeMtGQI","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":119,"y":400},"rootRelativePath":"assets/b91f3c85-ce39-4cf8-bdfd-d5628c060f76.png"},"1b9542ed-b621-4de7-9920-e107c9a8fa15":{"name":"heart","sourceUrl":null,"frameSize":{"x":352,"y":352},"frameCount":1,"looping":true,"frameDelay":12,"version":"7_oDdEbUwbcTNoBL37QdNYjQjehoi0DI","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":352},"rootRelativePath":"assets/1b9542ed-b621-4de7-9920-e107c9a8fa15.png"},"2b7ee685-d35b-4dfa-9744-04b82f6d2cce":{"name":"right","sourceUrl":"assets/api/v1/animation-library/gamelab/M.69EHPHiaoiKPkuu9B8QdGZQ7gE9LtK/category_icons/fastforward.png","frameSize":{"x":384,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":"M.69EHPHiaoiKPkuu9B8QdGZQ7gE9LtK","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/M.69EHPHiaoiKPkuu9B8QdGZQ7gE9LtK/category_icons/fastforward.png"},"b74c81d0-9cff-4ff5-8605-f190be4e8f6f":{"name":"left","sourceUrl":null,"frameSize":{"x":384,"y":384},"frameCount":1,"looping":true,"frameDelay":12,"version":"4HdOSE4GlBr8pqnnHtXMJGdbU9Mzsqo0","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":384},"rootRelativePath":"assets/b74c81d0-9cff-4ff5-8605-f190be4e8f6f.png"},"a9c09665-127b-4dcd-b99e-e1c2ba526e19":{"name":"toilet","sourceUrl":null,"frameSize":{"x":62,"y":102},"frameCount":1,"looping":true,"frameDelay":12,"version":"IwUlMUa0EURAKNZwqaD4H_abTiL_yPON","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":62,"y":102},"rootRelativePath":"assets/a9c09665-127b-4dcd-b99e-e1c2ba526e19.png"},"f64e07e3-71ab-4424-9744-d793ca29405b":{"name":"person4","sourceUrl":null,"frameSize":{"x":149,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"m66_7gq5.7QJq_SjsFiUbTRmoBqD.Fxl","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":149,"y":400},"rootRelativePath":"assets/f64e07e3-71ab-4424-9744-d793ca29405b.png"},"601a64f3-a82d-4d28-b7d5-1402363f38a3":{"name":"final","sourceUrl":null,"frameSize":{"x":384,"y":384},"frameCount":1,"looping":true,"frameDelay":12,"version":"qqIDT5nYbXPdkE0qmztGIZAlQmpc3_JL","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":384},"rootRelativePath":"assets/601a64f3-a82d-4d28-b7d5-1402363f38a3.png"},"26cf3c2a-502c-41d8-94c0-a3010582b4e5":{"name":"target","sourceUrl":null,"frameSize":{"x":31,"y":31},"frameCount":1,"looping":true,"frameDelay":12,"version":"w1zCECRcocMhz58zY_ZTubV6hZDoPl5a","loadedFromSource":true,"saved":true,"sourceSize":{"x":31,"y":31},"rootRelativePath":"assets/26cf3c2a-502c-41d8-94c0-a3010582b4e5.png"},"ad485fab-46cf-4161-a0e5-94a760379ccf":{"name":"title_text2","sourceUrl":null,"frameSize":{"x":900,"y":67},"frameCount":1,"looping":true,"frameDelay":12,"version":"qPCcia.o4vRKF3BQkAGyv0FVV0OjT0T3","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":67},"rootRelativePath":"assets/ad485fab-46cf-4161-a0e5-94a760379ccf.png"},"c5f81c58-fe48-402e-990a-1c5c846519fb":{"name":"finalText1","sourceUrl":"assets/v3/animations/svUeWAY7T2pTbd7UHUX_CVA5j4JvA55uKvOcqrws7fc/c5f81c58-fe48-402e-990a-1c5c846519fb.png","frameSize":{"x":813,"y":87},"frameCount":1,"looping":true,"frameDelay":4,"version":"T9XgHNGqf9y2PEm8lfZSlei9as1CZmOn","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":813,"y":87},"rootRelativePath":"assets/v3/animations/svUeWAY7T2pTbd7UHUX_CVA5j4JvA55uKvOcqrws7fc/c5f81c58-fe48-402e-990a-1c5c846519fb.png"},"85eac19e-8425-4f43-9172-c99cbeec95cc":{"name":"finalText2","sourceUrl":null,"frameSize":{"x":786,"y":81},"frameCount":1,"looping":true,"frameDelay":12,"version":"4.pEZHINAkLkvSLG0sRc6hGW6GmB9EvR","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":786,"y":81},"rootRelativePath":"assets/85eac19e-8425-4f43-9172-c99cbeec95cc.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Sets background
var bg = createSprite(200,200);
bg.setAnimation("title");

//Sets Title Text
var titleText = createSprite(200,100);
titleText.setAnimation("title_text2");
titleText.scale = 0.43;
titleText.visible = 1;

//Start button
var start = createSprite(200,300);
start.setAnimation("start");
start.scale = 0.25;
start.visible = 1;

//Levels
var level1 = createSprite(60,75);
level1.setAnimation("level1");
level1.scale = 3.5;
level1.visible = 0;
var level1Lock = false;
var level1Set = false;

var level2 = createSprite(150, 75);
level2.setAnimation("level2");
level2.scale = 3.5;
level2.visible = 0;
var level2Lock = true;
var level2Set = false;

var level3 = createSprite(240, 75);
level3.setAnimation("level3");
level3.scale = 3.5;
level3.visible = 0;
var level3Lock = true;
var level3Set = false;

var level4 = createSprite(330, 75);
level4.setAnimation("level4");
level4.scale = 3.5;
level4.visible = 0;
var level4Lock = true;
var level4Set = false;

var level5 = createSprite(150, 325);
level5.setAnimation("level5");
level5.scale = 3.5;
level5.visible = 0;
var level5Lock = true;
var level5Set = false;

var level6 = createSprite(240, 325);
level6.setAnimation("level6");
level6.scale = 3.5;
level6.visible = 0;
var level6Lock = true;
var level6Set = false;

var level7 = createSprite(60,75);
level7.setAnimation("level7");
level7.scale = 3.5;
level7.visible = 0;
var level7Lock = true;
var level7Set = false;

var level8 = createSprite(150, 75);
level8.setAnimation("level8");
level8.scale = 3.5;
level8.visible = 0;
var level8Lock = true;
var level8Set = false;

var level9 = createSprite(240, 75);
level9.setAnimation("level9");
level9.scale = 3.5;
level9.visible = 0;
var level9Lock = true;
var level9Set = false;

var level10 = createSprite(330, 75);
level10.setAnimation("level10");
level10.scale = 3.5;
level10.visible = 0;
var level10Lock = true;
var level10Set = false;

var level11 = createSprite(150, 325);
level11.setAnimation("level11");
level11.scale = 3.5;
level11.visible = 0;
var level11Lock = true;
var level11Set = false;

var level12 = createSprite(240, 325);
level12.setAnimation("level12");
level12.scale = 3.5;
level12.visible = 0;
var level12Lock = true;
var level12Set = false;

var level13 = createSprite(60, 75);
level13.setAnimation("level13");
level13.scale = 3.5;
level13.visible = 0;
var level13Lock = true;
var level13Set = false;

var level14 = createSprite(150, 75);
level14.setAnimation("level14");
level14.scale = 3.5;
level14.visible = 0;
var level14Lock = true;
var level14Set = false;

var level15 = createSprite(240, 75);
level15.setAnimation("level15");
level15.scale = 3.5;
level15.visible = 0;
var level15Lock = true;
var level15Set = false;

var level16 = createSprite(330, 75);
level16.setAnimation("level16");
level16.scale = 3.5;
level16.visible = 0;
var level16Lock = true;
var level16Set = false;

var level17 = createSprite(150, 325);
level17.setAnimation("level17");
level17.scale = 3.5;
level17.visible = 0;
var level17Lock = true;
var level17Set = false;

var level18 = createSprite(240, 325);
level18.setAnimation("level18");
level18.scale = 3.5;
level18.visible = 0;
var level18Lock = true;
var level18Set = false;

var final = createSprite(200,200);
final.setAnimation("final");
final.scale = 0.275;
final.visible = 0;
var finalLock = true;
var finalSet = false;

//Urinals
var urinalOne = createSprite(100,200);
urinalOne.setAnimation("urinal");
urinalOne.visible = 0;
var urinalTwo = createSprite(200,200);
urinalTwo.setAnimation("urinal");
urinalTwo.visible = 0;
var urinalThree = createSprite(300,200);
urinalThree.setAnimation("urinal");
urinalThree.visible = 0;
var urinalFour = createSprite(295, 200);
urinalFour.setAnimation("urinal");
urinalFour.visible = 0;
var urinalFive = createSprite(330,200);
urinalFive.setAnimation("urinal");
urinalFive.visible = 0;
var dividerOne = createSprite(100,200);
dividerOne.setAnimation("divider");
dividerOne.visible = 0;
var dividerTwo = createSprite(200,200);
dividerTwo.setAnimation("divider");
dividerTwo.visible = 0;
var dividerThree = createSprite(300,200);
dividerThree.setAnimation("divider");
dividerThree.visible = 0;
var toiletOne = createSprite(100,218);
toiletOne.setAnimation("toilet");
toiletOne.scale = 1.25;
toiletOne.visible = 0;
var toiletTwo = createSprite(200,218);
toiletTwo.setAnimation("toilet");
toiletTwo.scale = 1.25;
toiletTwo.visible = 0;
var toiletThree = createSprite(300,218);
toiletThree.setAnimation("toilet");
toiletThree.scale = 1.25;
toiletThree.visible = 0;

//People
var person1 = createSprite(100,200);
person1.setAnimation("person1");
person1.scale = 0.4;
person1.visible = 0;

var person2 = createSprite(225,200);
person2.setAnimation("person2");
person2.scale = 0.4;
person2.visible = 0;

var person3 = createSprite(330,200);
person3.setAnimation("person3");
person3.scale = 0.4;
person3.visible = 0;

var person4 = createSprite(0,200);
person4.setAnimation("person4");
person4.scale = 0.4;
person4.visible = 0;

//Corrects & Incorrects
var correct1 = createSprite(300,200);
correct1.setAnimation("correct");
correct1.scale = 0.15;
correct1.visible = 0;

var correct2 = createSprite(300,200);
correct2.setAnimation("correct");
correct2.scale = 0.15;
correct2.visible = 0;

var incorrect1 = createSprite(200,200);
incorrect1.setAnimation("incorrect");
incorrect1.scale = 0.15;
incorrect1.visible = 0;

var incorrect2 = createSprite(200,200);
incorrect2.setAnimation("incorrect");
incorrect2.scale = 0.15;
incorrect2.visible = 0;

//Left Right Buttons
var right = createSprite(350,200);
right.setAnimation("right");
right.scale = 0.15;
right.visible = 0;

var left = createSprite (50,200);
left.setAnimation("left");
left.scale = 0.15;
left.visible = 0;

var world = 1;

//Back button
var back = createSprite(350,350);
back.setAnimation("back");
back.scale = 0.15;
back.visible = 0;

//Set up hearts 
var heart1 = createSprite(20,375);
var heart2 = createSprite(60,375);
var heart3 = createSprite(100,375);
heart1.setAnimation("heart");
heart2.setAnimation("heart");
heart3.setAnimation("heart");
heart1.scale = 0.1;
heart2.scale = 0.1;
heart3.scale = 0.1;
heart1.visible = 0;
heart2.visible = 0;
heart3.visible = 0;
var health = 3;
var isGameOver = false;

//Sets sprite varaibles for final level
var target;
var finalText1 = createSprite(200,200);
finalText1.setAnimation("finalText1");
finalText1.scale = 0.5;
finalText1.visible = 0;

function draw(){
  drawSprites();
  
  //Starts Game
  if(mousePressedOver(start)){
    startGame();
  }
  
  if(isGameOver){
    fill("white");
    strokeWeight(3);
    stroke("black");
    textSize(20);
    text("Sorry you lost. Please try agian", 75, 200);
  } else{
    levelSelect();
    changeLevelSelectLeft();
    changeLevelSelectRight();
  }
  
  
  
  if(level1Set){
    setText();
    text("Where would you go?", 50,100);
    if(mousePressedOver(urinalThree)){
      incorrect1.visible = 1;
      correct1.visible = 1;
      back.visible = 1;
      level1Set = false;
      level2Lock = false;
      world = 1;
    }
    if(mousePressedOver(urinalTwo) && incorrect1.visible == 0){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
  }
  
  if(level2Set){
    if(mousePressedOver(urinalTwo)  && incorrect1.visible == 0){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
    if(mousePressedOver(urinalFour)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      incorrect1.visible = 1;
      back.visible = 1;
      level2Set = false;
      level3Lock = false;
      world = 1;
    }
  }
  
  if(level3Set){
    setText();
    text("The wall is protection.", 100,50);
    if(mousePressedOver(urinalTwo) && incorrect1.visible == 0){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
    if(mousePressedOver(urinalFour) && incorrect2.visible == 0){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect2.visible = 1;
      destroyHeart();
    }
    if(mousePressedOver(urinalFive)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      incorrect1.visible = 1;
      incorrect2.visible = 1;
      back.visible = 1;
      level3Set = false;
      level4Lock = false;
      world = 1;
    }
  }
  
  if(level4Set){
    setText();
    text("Choose the most right answer",100,50);
    if(mousePressedOver(urinalTwo) && incorrect1.visible == 0){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
    if(mousePressedOver(urinalThree) && incorrect2.visible == 0){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect2.visible = 1;
      destroyHeart();
    }
    if(mousePressedOver(urinalFive)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      incorrect1.visible = 1;
      incorrect2.visible = 1;
      back.visible = 1;
      level4Set = false;
      level5Lock = false;
      world = 1;
    }
  }
  
  if(level5Set){
    level1.visible = 0;
    if(mousePressedOver(urinalTwo)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      incorrect1.visible = 1;
      back.visible = 1;
      level5Set = false;
      level6Lock = false;
      level1.visible = 0;
      world = 1;
    }
    if(mousePressedOver(urinalThree) && mouseWentDown()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
  }

  if(level6Set){
    level1.visible = 0;
    if(mousePressedOver(urinalOne)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      incorrect1.visible = 1;
      incorrect2.visible = 1;
      back.visible = 1;
      level6Set = false;
      level7Lock = false;
      world = 1;
    }
    if(mousePressedOver(urinalTwo) && level6.visible == 0 && incorrect2.visible == 0 && mouseWentDown()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect2.visible = 1;
      destroyHeart();
    }
    if(mousePressedOver(urinalFive) && incorrect1.visible == 0 && mouseWentDown()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
  }
  
  if(level7Set){
    if(mousePressedOver(urinalOne) && incorrect1.visible == 0){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
    if(mousePressedOver(urinalThree) && incorrect2.visible == 0 && mouseWentUp()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect2.visible = 1;
      destroyHeart();
    }
    if(mousePressedOver(urinalFive)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      incorrect1.visible = 1;
      incorrect2.visible = 1;
      back.visible = 1;
      level7Set = false;
      level8Lock = false;
      world = 2;
    }
  }
  
  if(level8Set){
    setText();
    text("Dividers provide protection.", 50,100);
    if(mousePressedOver(dividerTwo)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      back.visible = 1;
      level8Set = false;
      level9Lock = false;
      world = 2;
    }

  }
  
  if(level9Set){
    if(mousePressedOver(dividerTwo) && incorrect1.visible == 0 && mouseWentDown()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      setText();
      text("Not always.", 100,50);
      incorrect1.visible = 1;
      destroyHeart();
    }
    if(mousePressedOver(urinalOne) && incorrect2.visible == 0 && mouseWentDown()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect2.visible = 1;
      destroyHeart();
    }
    if(mousePressedOver(urinalTwo)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      incorrect1.visible = 1;
      incorrect2.visible = 1;
      back.visible = 1;
      level9Set = false;
      level10Lock = false;
      world = 2;
    }
  }
  
  if(level10Set){
    if(mousePressedOver(urinalOne)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      incorrect1.visible = 1;
      incorrect2.visible = 1;
      back.visible = 1;
      level10Set = false;
      level11Lock = false;
      world = 2;
    }
    if(mousePressedOver(urinalTwo) && incorrect2.visible == 0 && mouseWentDown()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect2.visible = 1;
      destroyHeart();
    }
    if(mousePressedOver(urinalFour) && mouseWentDown()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
  }
  
  if(level11Set){
    level1.visible = 0;
    if(mousePressedOver(urinalOne) && mouseWentDown()){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      incorrect1.visible = 1;
      incorrect2.visible = 1;
      back.visible = 1;
      level11Set = false;
      level12Lock = false;
      world = 2;
    }
    if(mousePressedOver(dividerTwo) && incorrect1.visible == 0 && mouseWentDown()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
  }
  
  if(level12Set){
    level1.visible = 0;
    if(mousePressedOver(dividerOne)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      incorrect1.visible = 1;
      back.visible = 1;
      level12Set = false;
      level13Lock = false;
      world = 2;
    }
    if(mousePressedOver(urinalThree) && incorrect1.visible == 0 && mouseWentDown()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
  }
  
  if(level13Set){
    setText();
    text("Toilets can be used in desperation.", 50,100);
    if(mousePressedOver(toiletOne)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      back.visible = 1;
      level13Set = false;
      level14Lock = false;
      world = 3;
    }
  }
  
  if(level14Set){
    if(mousePressedOver(toiletOne)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      incorrect1.visible = 1;
      back.visible = 1;
      level14Set = false;
      level15Lock = false;
      world = 3;
    }
    if(mousePressedOver(toiletTwo) && incorrect1.visible == 0 && mouseWentDown()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
  }
  
  if(level15Set){
    if(mousePressedOver(dividerOne)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      incorrect1.visible = 1;
      back.visible = 1;
      level15Set = false;
      level16Lock = false;
      world = 3;
    }
    if(mousePressedOver(toiletOne) && incorrect1.visible == 0 && mouseWentDown()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
  }
  
  if(level16Set){
    if(mousePressedOver(toiletTwo)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      incorrect1.visible = 1;
      incorrect2.visible = 1;
      back.visible = 1;
      level16Set = false;
      level17Lock = false;
      world = 3;
    }
    if(mousePressedOver(toiletOne) && incorrect1.visible == 0 && mouseWentDown()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
    if(mousePressedOver(dividerOne) && incorrect2.visible == 0 && mouseWentDown()) {
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect2.visible = 1;
      destroyHeart();
    }
  }
  
  if(level17Set){
    level1.visible = 0;
    if(mousePressedOver(urinalOne)){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      incorrect1.visible = 1;
      incorrect2.visible = 1;
      back.visible = 1;
      level17Set = false;
      level18Lock = false;
      world = 3;
    }
    if(mousePressedOver(urinalTwo) && incorrect1.visible == 0 && mouseWentDown()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
    if(mousePressedOver(toiletOne) && incorrect2.visible == 0 && mouseWentDown()) {
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect2.visible = 1;
      destroyHeart();
    }
  }
  
  if(level18Set){
    level1.visible = 0;
    if(mousePressedOver(dividerOne) && correct2.visible == 0){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      correct2.visible = 1;
      incorrect1.visible = 1;
      back.visible = 1;
      level18Set = false;
      finalLock = false;
      world = 3;
    }
    if(mousePressedOver(toiletOne) && correct1.visible == 0){
      playSound("https://audio.code.org/win1.mp3", false);
      correct1.visible = 1;
      correct2.visible = 1;
      incorrect1.visible = 1;
      back.visible = 1;
      level18Set = false;
      finalLock = false;
      world = 3;
    }
    if(mousePressedOver(urinalTwo) && incorrect1.visible == 0 && mouseWentDown()){
      playSound("https://audio.code.org/losepoint1.mp3", false);
      incorrect1.visible = 1;
      destroyHeart();
    }
  }
  
  if(finalSet){
    target.x = mouseX;
    target.y = mouseY;
    
    person1.rotation = randomNumber(-5,5);
    person2.rotation = randomNumber(-5,5);
    person3.rotation = randomNumber(-5,5);
    person4.rotation = randomNumber(-5,5);
    
    if(mousePressedOver(person1)){
      playSound("https://audio.code.org/start1.mp3", false);
      person1.visible = 0;
      urinalOne.setAnimation("yellow1");
    }
    if(mousePressedOver(person2)){
      playSound("https://audio.code.org/start1.mp3", false);
      person2.visible = 0;
      urinalTwo.setAnimation("yellow2");
    }
    if(mousePressedOver(person3)){
      playSound("https://audio.code.org/start1.mp3", false);
      person3.visible = 0;
      urinalFour.setAnimation("yellow3");
    }
    if(mousePressedOver(person4)){
      playSound("https://audio.code.org/start1.mp3", false);
      person4.visible = 0;
      urinalFive.setAnimation("yellow4");
    }
    if(person1.visible == 0 && person2.visible == 0 && person3.visible == 0 && person4.visible == 0){
      urinalThree.rotation = randomNumber(-5,5);
    }
    if(mousePressedOver(urinalThree) && person1.visible == 0 && person2.visible == 0 && person3.visible == 0 && person4.visible == 0){
      ending();
    }
  }
  
  if(back.visible == 1 && mousePressedOver(back)){
    backLevelSelect();
  }
}

function startGame(){
  //Destory old sprites
  titleText.destroy();
  start.destroy();
  level1.visible = 1;
  heart1.visible = 1;
  heart2.visible = 1;
  heart3.visible = 1;
}

function destroyHeart(){
  if(health == 1){
    heart1.destroy();
    gameOver();
  }
  if(health == 2){
    heart2.destroy();
    health = 1;
  }
  if(health == 3){
    heart3.destroy();
    health = 2;
  }
}

function setText(){
  fill("white");
  strokeWeight(3);
  stroke("black");
  textSize(20);
}

function gameOver(){
  createLevelSelect1();
  allInvisible();
  isGameOver = true;
}

function createLevelSelect1(){
  bg.setAnimation("bg");
  allInvisible();
  
  urinalOne.x = 125;
  urinalTwo.x = 200;
  urinalThree.x = 275;
  urinalOne.visible = 1;
  urinalTwo.visible = 1;
  urinalThree.visible = 1;
  right.visible = 0;
  
  if(level7Lock == false){
    right.visible = 1;
  }
  if(level1Lock == false){
    level1.visible = 1;
  }
  if(level2Lock == false){
    level2.visible = 1;
  }
  if(level3Lock == false){
    level3.visible = 1;
  }
  if(level4Lock == false){
    level4.visible = 1;
  }
  if(level5Lock == false){
    level5.visible = 1;
  }
  if(level6Lock == false){
    level6.visible = 1;
  }
}

function createLevelSelect2(){
  bg.setAnimation("bg");
  allInvisible();
  
  dividerOne.x = 125;
  dividerTwo.x = 200;
  dividerThree.x = 275;
  dividerOne.visible = 1;
  dividerTwo.visible = 1;
  dividerThree.visible = 1;
  
  if(level7Lock == false){
    level7.visible = 1;
  }
  if(level8Lock == false){
    level8.visible = 1;
  } 
  if(level9Lock == false){
    level9.visible = 1;
  } 
  if(level10Lock == false){
    level10.visible = 1;
  } 
  if(level11Lock == false){
    level11.visible = 1;
  } 
  if(level12Lock == false){
    level12.visible = 1;
  } 
  left.visible = 1;
  if(level13Lock == false){
    right.visible = 1;
  } else {
    right.visible = 0;
  }
}

function createLevelSelect3(){
  bg.setAnimation("bg");
  allInvisible();
  
  toiletOne.x = 100;
  toiletOne.visible = 1;
  toiletTwo.x = 200;
  toiletTwo.visible = 1;
  toiletThree.x = 300;
  toiletThree.visible = 1;
  
  if(level13Lock == false){
    level13.visible = 1;
  }
  if(level14Lock == false){
    level14.visible = 1;
  }
  if(level15Lock == false){
    level15.visible = 1;
  }
  if(level16Lock == false){
    level16.visible = 1;
  }
  if(level17Lock == false){
    level17.visible = 1;
  }
  if(level18Lock == false){
    level18.visible = 1;
  }
  left.visible = 1;
  if(finalLock == false){
    right.visible = 1;
  }
}

function createLevelSelectFinal(){
  bg.setAnimation("bg");
  allInvisible();
  left.visible = 1;
  
  urinalThree.x = 330;
  urinalThree.setAnimation("goldurinal");
  urinalThree.visible = 1;
  
  final.visible = 1;
}


function changeLevelSelectRight(){
  if(world == 3 && mouseIsOver(right) && right.visible == true && mouseWentUp()){
    world = 4;
    createLevelSelectFinal();
  }
  if(world == 2 && mouseIsOver(right) && right.visible == true && mouseWentUp()){
    world = 3;
    createLevelSelect3();
  }
  if(world == 1 && mouseIsOver(right) && right.visible == true && mouseWentUp()){
    world = 2;
    createLevelSelect2();
  }
}

function changeLevelSelectLeft(){
  if(world == 2 && mouseIsOver(left) && left.visible == 1 && mouseWentUp()){
    world = 1;
    createLevelSelect1();
  }
  if(world == 3 && mouseIsOver(left) && left.visible == 1 && mouseWentUp()){
    world = 2;
    createLevelSelect2();
  }
  if(world == 4 && mouseIsOver(left) && left.visible == 1 && mouseWentUp()){
    urinalThree.setAnimation("urinal");
    world = 3;
    createLevelSelect3();
  }
}

function backLevelSelect(){
  if(world == 1){
    createLevelSelect1(); 
  }
  if(world == 2){
    createLevelSelect2();
  }
  if(world == 3){
    createLevelSelect3();
  }
  if(world == 4){
    createLevelSelectFinal();
  }
}

function levelSelect(){
  if(mousePressedOver(level1) && level1.visible == 1){
    playLevel1();
  }
  if(mousePressedOver(level2) && level2.visible == 1){
    playLevel2();
  }
  if(mousePressedOver(level3) && level3.visible == 1){
    playLevel3();
  }
  if(mousePressedOver(level4) && level4.visible == 1){
    playLevel4();
  }
  if(mousePressedOver(level5) && level5.visible == 1){
    playLevel5();
  }
  if(mousePressedOver(level6) && level6.visible == 1){
    playLevel6();
  }
  if(mousePressedOver(level7) && level7.visible == 1){
    playLevel7();
  }
  if(mousePressedOver(level8) && level8.visible == 1){
    playLevel8();
  }
  if(mousePressedOver(level9) && level9.visible == 1){
    playLevel9();
  }
  if(mousePressedOver(level10) && level10.visible == 1){
    playLevel10();
  }
  if(mousePressedOver(level11) && level11.visible == 1){
    playLevel11();
  }
  if(mousePressedOver(level12) && level12.visible == 1){
    playLevel12();
  }
  if(mousePressedOver(level13) && level13.visible == 1){
    playLevel13();
  }
  if(mousePressedOver(level14) && level14.visible == 1){
    playLevel14();
  }
  if(mousePressedOver(level15) && level15.visible == 1){
    playLevel15();
  }
  if(mousePressedOver(level16) && level16.visible == 1){
    playLevel16();
  }
  if(mousePressedOver(level17) && level17.visible == 1){
    playLevel17();
  }
  if(mousePressedOver(level18) && level18.visible == 1){
    playLevel18();
  }
  if(mousePressedOver(final) && final.visible == 1){
    playFinal();
  }
}

function allInvisible(){
  allLevelsInvisible();
  urinalOne.visible = 0;
  urinalTwo.visible = 0;
  urinalThree.visible = 0;
  urinalFour.visible = 0;
  urinalFive.visible = 0;
  dividerOne.visible = 0;
  dividerTwo.visible = 0;
  dividerThree.visible = 0;
  toiletOne.visible = 0;
  toiletTwo.visible = 0;
  toiletThree.visible = 0;
  person1.visible = 0;
  person2.visible = 0;
  person3.visible = 0;
  person4.visible = 0;
  correct1.visible = 0;
  correct2.visible = 0;
  incorrect1.visible = 0;
  incorrect2.visible = 0;
  right.visible = 0;
  left.visible = 0;
  back.visible = 0;
  finalText1.visible = 0;
}

function allLevelsInvisible(){
  level1.visible = 0;
  level2.visible = 0;
  level3.visible = 0;
  level4.visible = 0;
  level5.visible = 0;
  level6.visible = 0;
  level7.visible = 0;
  level8.visible = 0;
  level9.visible = 0;
  level10.visible = 0;
  level11.visible = 0;
  level12.visible = 0;
  level13.visible = 0;
  level14.visible = 0;
  level15.visible = 0;
  level16.visible = 0;
  level17.visible = 0;
  level18.visible = 0;
  final.visible = 0;
}

function allBaseVisible(){
  urinalOne.visible = 1;
  urinalTwo.visible = 1;
  urinalThree.visible = 1;
  person1.visible = 1;
}

function playLevel1(){
  bg.setAnimation("bg");
  allInvisible();
  allBaseVisible();
  
  urinalOne.x = 100;
  urinalTwo.x = 200;
  urinalThree.x = 300;
  urinalOne.visible = 1;
  urinalTwo.visible = 1;
  urinalThree.visible = 1;
  person1.visible = 1;
  person1.x = 100;
  correct1.x = 300;
  incorrect1.x = 200;
  level1Set = true;
}

function playLevel2(){
  bg.setAnimation("bg");
  allLevelsInvisible();
  allBaseVisible();
  
  urinalOne.x = 75;
  urinalTwo.x = 150;
  urinalThree.x = 225;
  urinalFour.x = 295;
  urinalFour.visible = 1;
  person1.x = 75;
  person2.visible = 1;
  person2.x = 225;
  correct1.x = 295;
  incorrect1.x = 150;
  
  level2Set = true;
}

function playLevel3(){
  bg.setAnimation("bg");
  allLevelsInvisible();
  allBaseVisible();
  
  urinalOne.x = 30;
  urinalTwo.x = 105;
  urinalThree.x = 180;
  urinalFour.x = 255;
  urinalFour.visible = 1;
  urinalFive.visible = 1;
  person1.x = 30;
  person2.x = 180;
  person2.visible = 1;
  correct1.x = 330;
  incorrect1.x = 105;
  incorrect2.x = urinalFour.x;
  
  level3Set = true;
}

function playLevel4(){
  bg.setAnimation("bg");
  allLevelsInvisible();
  allBaseVisible();
  
  urinalOne.x = 30;
  urinalTwo.x = 105;
  urinalThree.x = 180;
  urinalFour.x = 255;
  urinalFour.visible = 1;
  urinalFive.visible = 1;
  person1.x = 30;
  person2.x = 255;
  person2.visible = 1;
  correct1.x = 330;
  incorrect1.x = 105;
  incorrect2.x = urinalThree.x;
  
  level4Set = true;
}

function playLevel5(){
  bg.setAnimation("bg");
  allInvisible();
  allBaseVisible();
  
  urinalOne.x = 30;
  urinalTwo.x = 105;
  urinalThree.x = 180;
  urinalFour.x = 255;
  urinalFive.x = 330;
  urinalFour.visible = 1;
  urinalFive.visible = 1;
  person1.x = 30;
  person2.x = 255;
  person3.x = 330;
  person2.visible = 1;
  person3.visible = 1;
  correct1.x = 105;
  incorrect1.x = 180;
  
  level5Set = true;
}

function playLevel6(){
  bg.setAnimation("bg");
  allInvisible();
  allBaseVisible();
  
  urinalOne.x = 30;
  urinalTwo.x = 105;
  urinalThree.x = 180;
  urinalFour.x = 255;
  urinalFour.visible = 1;
  urinalFive.visible = 1;
  person1.visible = 0;
  person2.x = 180;
  person2.visible = 1;
  person3.x = 255;
  person3.visible = 1;
  correct1.x = 30;
  incorrect1.x = 330;
  incorrect2.x = urinalTwo.x;
  
  level6Set = true;
}

function playLevel7(){
  bg.setAnimation("bg");
  allInvisible();
  allBaseVisible();
  
  urinalOne.x = 30;
  urinalTwo.x = 105;
  urinalThree.x = 180;
  urinalFour.x = 255;
  urinalFour.visible = 1;
  urinalFive.visible = 1;
  person1.visible = 0;
  person2.x = 105;
  person2.visible = 1;
  person3.x = 255;
  person3.visible = 1;
  correct1.x = 330;
  incorrect1.x = 30;
  incorrect2.x = urinalThree.x;
  
  level7Set = true;
}

function playLevel8(){
  bg.setAnimation("bg");
  allLevelsInvisible();
  allInvisible();

  dividerOne.x = 100;
  dividerTwo.x = 200;
  dividerThree.x = 300;
  dividerOne.visible = 1;
  dividerTwo.visible = 1;
  dividerThree.visible = 1;
  person1.x = 100;
  person3.x = 300;
  person1.visible = 1;
  person3.visible = 1;
  correct1.x = 200;
  
  level8Set = true;
}

function playLevel9(){
  bg.setAnimation("bg");
  allInvisible();

  dividerOne.x = 30;
  dividerTwo.x = 105;
  dividerThree.x = 180;
  urinalOne.x = 255;
  urinalTwo.x = 330;
  dividerOne.visible = 1;
  dividerTwo.visible = 1;
  dividerThree.visible = 1;
  urinalOne.visible = 1;
  urinalTwo.visible = 1;
  person2.x = 30;
  person3.x = 180;
  person2.visible = 1;
  person3.visible = 1;
  correct1.x = 330;
  incorrect1.x = 105;
  incorrect2.visible = 0;
  incorrect2.x = urinalOne.x;
  
  level9Set = true;
}

function playLevel10(){
  bg.setAnimation("bg");
  allInvisible();
  
  urinalOne.x = 30;
  dividerOne.x = 105;
  urinalTwo.x = 180;
  urinalThree.x = 255;
  urinalFour.x = 330;
  urinalOne.visible = 1;
  dividerOne.visible = 1;
  urinalTwo.visible = 1;
  urinalThree.visible = 1;
  urinalFour.visible = 1;
  person1.x = 105;
  person2.x = urinalThree.x;
  person1.visible = 1;
  person2.visible = 1;
  correct1.x = urinalOne.x;
  incorrect2.x = urinalTwo.x;
  incorrect1.x = urinalFour.x;
  
  level10Set = true;
}

function playLevel11(){
  bg.setAnimation("bg");
  allInvisible();
  urinalOne.x = 30;
  dividerOne.x = 105;
  dividerTwo.x = 180;
  urinalTwo.x = 255;
  urinalThree.x = 330;
  urinalOne.visible = 1;
  dividerOne.visible = 1;
  dividerTwo.visible = 1;
  urinalTwo.visible = 1;
  urinalThree.visible = 1;
  person1.x = dividerOne.x;
  person2.x = urinalThree.x;
  person3.x = urinalTwo.x;
  person1.visible = 1;
  person2.visible = 1;
  person3.visible = 1;
  correct1.x = urinalOne.x;
  incorrect1.x = dividerTwo.x;
  
  level11Set = true;
}

function playLevel12(){
  bg.setAnimation("bg");
  allInvisible();
  urinalOne.x = 30;
  dividerOne.x = 105;
  dividerTwo.x = 180;
  urinalTwo.x = 255;
  urinalThree.x = 330;
  urinalOne.visible = 1;
  dividerOne.visible = 1;
  dividerTwo.visible = 1;
  urinalTwo.visible = 1;
  urinalThree.visible = 1;
  person1.x = urinalOne.x;
  person2.x = dividerTwo.x;
  person3.x = urinalTwo.x;
  person1.visible = 1;
  person2.visible = 1;
  person3.visible = 1;
  correct1.x = dividerOne.x;
  incorrect1.x = urinalThree.x;
  
  level12Set = true;
}

function playLevel13(){
  bg.setAnimation("bg");
  allInvisible();
  toiletOne.x = 100;
  dividerOne.x = 200;
  urinalOne.x = 300;
  toiletOne.visible = 1;
  dividerOne.visible = 1;
  urinalOne.visible = 1;
  person1.x = dividerOne.x;
  person2.x = urinalOne.x;
  person1.visible = 1;
  person2.visible = 1;
  correct1.x = toiletOne.x;
  
  level13Set = true;
}

function playLevel14(){
  bg.setAnimation("bg");
  allInvisible();
  toiletOne.x = 40;
  toiletTwo.x = 120;
  urinalOne.x = 192;
  urinalTwo.x = 267;
  urinalThree.x = 342;
  toiletOne.visible = 1;
  toiletTwo.visible = 1;
  urinalOne.visible = 1;
  urinalTwo.visible = 1;
  urinalThree.visible = 1;
  person1.x = urinalOne.x;
  person2.x = urinalTwo.x;
  person3.x = urinalThree.x;
  person1.visible = 1;
  person2.visible = 1;
  person3.visible = 1;
  correct1.x = toiletOne.x;
  incorrect1.x = toiletTwo.x;
  
  level14Set = true;
}

function playLevel15(){
  bg.setAnimation("bg");
  allInvisible();
  dividerOne.x = 35;
  urinalOne.x = 105;
  urinalTwo.x = 180;
  urinalThree.x = 255;
  toiletOne.x = 340;
  person1.x = urinalOne.x;
  person2.x = urinalTwo.x;
  person3.x = urinalThree.x;
  dividerOne.visible = 1;
  urinalOne.visible = 1;
  urinalTwo.visible = 1;
  urinalThree.visible = 1;
  toiletOne.visible = 1;
  person1.visible = 1;
  person2.visible = 1;
  person3.visible = 1;
  correct1.x = dividerOne.x;
  incorrect1.x = toiletOne.x;
  
  level15Set = true;
}

function playLevel16(){
  bg.setAnimation("bg");
  allInvisible();
  toiletOne.x = 40;
  urinalOne.x = 122;
  dividerOne.x = 190;
  urinalTwo.x = 265;
  toiletTwo.x = 340;
  person4.x = urinalOne.x;
  person2.x = urinalTwo.x;
  correct1.x = toiletTwo.x;
  incorrect1.x = toiletOne.x;
  incorrect2.x = dividerOne.x;
  toiletOne.visible = 1;
  urinalOne.visible = 1;
  dividerOne.visible = 1;
  urinalTwo.visible = 1;
  toiletTwo.visible = 1;
  person4.visible = 1;
  person2.visible = 1;
  
  level16Set = true;
}

function playLevel17(){
  bg.setAnimation("bg");
  allInvisible();
  urinalOne.x = 35;
  urinalTwo.x = 105;
  dividerOne.x = 180;
  dividerTwo.x = 255;
  toiletOne.x = 340;
  person1.x = dividerOne.x;
  person2.x = dividerTwo.x;
  person1.visible = 1;
  person2.visible = 1;
  toiletOne.visible = 1;
  urinalOne.visible = 1;
  dividerOne.visible = 1;
  urinalTwo.visible = 1;
  dividerTwo.visible = 1;
  correct1.x = urinalOne.x;
  incorrect1.x = urinalTwo.x;
  incorrect2.x = toiletOne.x;
  
  level17Set = true;
}

function playLevel18(){
  bg.setAnimation("bg");
  allInvisible();
  dividerOne.x = 30;
  dividerTwo.x = 105;
  urinalOne.x = 180;
  urinalTwo.x = 255;
  toiletOne.x = 340;
  person2.x = dividerTwo.x;
  person3.x = urinalOne.x;
  toiletOne.visible = 1;
  urinalOne.visible = 1;
  dividerOne.visible = 1;
  urinalTwo.visible = 1;
  dividerTwo.visible = 1;
  person3.visible = 1;
  person2.visible = 1;
  correct1.x = dividerOne.x;
  incorrect1.x = urinalTwo.x;
  correct2.x = toiletOne.x;
  
  level18Set = true;
}

function playFinal(){
  bg.setAnimation("bg");
  allInvisible();
  
  urinalOne.x = 50;
  urinalTwo.x = 125;
  urinalThree.x = 200;
  urinalThree.setAnimation("goldurinal");
  urinalFour.x = 275;
  urinalFive.x = 350;
  urinalOne.visible = 1;
  urinalTwo.visible = 1;
  urinalThree.visible = 1;
  urinalFour.visible = 1;
  urinalFive.visible = 1;
  person1.x = urinalOne.x;
  person2.x = urinalTwo.x;
  person3.x = urinalFour.x;
  person4.x = urinalFive.x;
  person1.visible = 1;
  person2.visible = 1;
  person3.visible = 1;
  person4.visible = 1;
  
  target = createSprite(mouseX, mouseY);
  target.setAnimation("target");
  
  finalSet = true;
}

function ending(){
  bg.setAnimation("title");
  allInvisible();
  
  target.destroy();
  finalText1.visible = 1;
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
