<?php
     $string = file_get_contents('.data/todolist.json');

     header('Content-type: Application/json');
     echo $string;




?>