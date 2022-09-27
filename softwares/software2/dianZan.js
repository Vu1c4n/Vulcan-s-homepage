<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button id="dzs" onclick="dianzan()">0</button>
    <script>
      function dianzan() {
        let dianzanshubiaoqian = window.document.getElementById("dzs");
        let dianzanshu = parseInt(dianzanshubiaoqian.innerText);
        let xinshuzi = dianzanshu + 1;
        dianzanshubiaoqian.innerText = xinshuzi;
        return;
      }
    </script>
  </body>
</html>
