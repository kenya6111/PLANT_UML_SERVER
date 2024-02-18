<?php
require 'vendor/autoload.php';
use function Jawira\PlantUml\encodep;
// problem_detail.php
if (isset($_GET['id'])) {
    $problemId = $_GET['id'];
    $title = $_GET['title'];
    $theme = $_GET['theme'];
    $umlText = $_GET['uml'];
    // ここで $problemId に基づいて問題の詳細を取得し、ページを表示する
    

    $encode = encodep($umlText);
    $svg = file_get_contents("http://www.plantuml.com/plantuml/svg/{$encode}");




  }
?>

<!DOCTYPE html>
<html>
  <head>
    <title>browser-amd-editor</title>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>
    <div id="container">
      <div>
      <?php echo 'ID : '.$problemId+1;
            echo '  '.$title;
      ?>
      </div>
        <div
          id="monaco"
          class="child"
        ></div>
        <div
          id="result"
          class="child"
        ></div>
        <div
          class="child"
        >
        <?php if (isset($svg)) { echo $svg; } ?>
      </div>
    </div>
    
    <script src="./node_modules/monaco-editor/min/vs/loader.js"></script>
    <!-- <script  src="./js/script.js"></script> -->
    <script>
      require.config({ paths: { vs: "./node_modules/monaco-editor/min/vs" } });

      require(["vs/editor/editor.main"], function () {
        var editor = monaco.editor.create(
          document.getElementById("monaco"),
          {
            value: '',
            language: "javascript",
          }
        );

        editor.getModel().onDidChangeContent((event) => {
            var code = editor.getValue();
            // 内容を表示する要素にセット
            document.getElementById("result").textContent = code;
            
         });
      });


      

    </script>
  </body>
</html>

