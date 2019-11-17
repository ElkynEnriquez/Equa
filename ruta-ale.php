<!doctype html>
<html lang="es">
    <head>
        <!-- Etiquetas <meta> obligatorias para Bootstrap -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
        <!-- Enlazando el CSS de Bootstrap 
        <link rel="stylesheet" href="css/tema-tesis.min.css"> -->
        
        <title>Ruta aleatoria</title>
        <!--************** Inicio Scripts Bootstrap y Cambio de tema ******************** -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <!--script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>
        <!-- Fin jQuery, Popper.js y Bootstrap JS -->
  </head>
  <body>
      <div id="p1"></div>
<?php
    require_once('../config.php');
    global $USER;
    $userid=$USER->id;
    $usuario="root";
    $contrasena="Equa2019";
    //$servidor="192.68.185.121:3306";
    $servidor="localhost";
    $basededatos="moodle";
    $conexion= mysqli_connect($servidor,$usuario,$contrasena) or die ("No se ha podido conectar servidor");
    $db = mysqli_select_db($conexion, $basededatos) or die("Error al seleccionar la BD");
    //$consulta= "SELECT * FROM moodle.mdl_user_info_data";
    $consultaEstilos="SELECT data FROM moodle.mdl_user_info_data where userid=".$userid;
    $estilosUser = mysqli_query($conexion, $consultaEstilos);
    $pos = strpos($estilosUser, "-");
    $arrayEstilosUser = [];

      echo "<script>
var consulta=".$estilosUser.";
<script>";

     echo "<script>
                alert('Mensaje".$estilosUser."');
    </script>";

    if ($pos === false) {
        $arrayEstilosUser[0] = $estiloUser;
    }
    else
        $arrayEstilosUser = explode("-", $estilosUser);
?>

<?php
    if (sizeof($arrayEstilosUser)==1) {
        $aleatorio=0;
    }
    else if (sizeof($arrayEstilosUser)>=1) {
        $aleatorio=rand(0,sizeof($arrayEstilosUser));
    }
    $eliminarEstilo= "DELETE FROM mdl_user_info_data WHERE userid='".$userid."' AND fieldid=2";
    $insertarEstilo= "INSERT INTO mdl_user_info_data (userid, fieldid, data, dataformat) VALUES ('".$userid."', '2', '".$arrayEstilosUser[$aleatorio]."', '0')";
    mysqli_query($conexion, $eliminarEstilo);
    mysqli_query($conexion, $insertarEstilo);
    mysqli_close( $conexion );
    ?>
    <script>
        $("#p1").hmtl("consult iD: "+consulta);
        alert("consult iD: "+consulta);
    </script>
</body>
</html>