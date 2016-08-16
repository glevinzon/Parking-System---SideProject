<?PHP
    include_once("connection.php");
	if(isset($_POST['floor'])){
	$floor = $_POST['floor'];

    $query = "SELECT * FROM park_log WHERE floor = '$floor' GROUP BY park_no ORDER BY entry_id ASC "; 
    
    $result = mysqli_query($conn, $query);
    
    while($row = mysqli_fetch_assoc($result)){
            $data[] = $row;
    }
	header('Content-Type: application/json');
    echo json_encode($data);
	
	}
?>
