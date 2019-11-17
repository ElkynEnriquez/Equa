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
    
$mystring = 'abc';
$findme   = 'a';
$pos = strpos($mystring, $findme);

// Nótese el uso de ===. Puesto que == simple no funcionará como se espera
// porque la posición de 'a' está en el 1° (primer) caracter.
if ($pos === false) {
strpos
    if ()
$arrayEstilosUser = explode("-", $estilosUser);
    
?>

<?php
    if (sizeof($arrayEstilosUser)==1) {
        $aleatorio=1;
    }
    else if (sizeof($arrayEstilosUser)>=1) {
        $aleatorio=rand(1,(sizeof($arrayEstilosUser)+1));
    }
    $eliminarEstilo= "DELETE FROM mdl_user_info_data WHERE userid='".$userid."' AND fieldid=2";
    $insertarEstilo= "INSERT INTO mdl_user_info_data (userid, fieldid, data, dataformat) VALUES ('".$userid."', '2', '".$arrayEstilosUser[$aleatorio]."', '0')";
    mysqli_query($conexion, $eliminarEstilo);
    mysqli_query($conexion, $insertarEstilo);
    mysqli_close( $conexion );
    ?>
    <script>
        //var idUsuario = <?= $userid ?>;
        //alert("usario iD: "+idUsuario);
    </script>