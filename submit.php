<?php
// cross-origin setting - read more?
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

// db_connect
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "airbnb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
/* if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo 'connection good<br>';
} */

$console_log = array();

// check/create table
$table_user_contacts = ("select 3 from user_contacts LIMIT 1");
if (!$conn->query($table_user_contacts)) {

    $create_table = "CREATE TABLE user_contacts (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        mobile VARCHAR(15) NOT NULL,
        agreement BIT NOT NULL
        )";

    if ($conn->query($create_table) === TRUE) {
        array_push(
            $console_log,
            ["note" => "Table user_contacts created successfully"]
        );
    } else {
        // echo "Error creating table: " . $conn->error;

        array_push(
            $console_log,
            ["error" => "Error creating table: " . $conn->error]
        );
    }
}


// get data via axios
// https://www.codegrepper.com/code-examples/php/axios+post+to+php
// https://zerowp.com/sending-axios-parameters-with-a-post-request-in-php/
$form_data = json_decode(file_get_contents("php://input"), true);
/* print_r($form_data); */

if (!isset($form_data['full_name']) && !isset($form_data['agreement'])) {

    // return error
    array_push(
        $console_log,
        ["error" => "No form_data found (full_name, agreement)"]
    );
}

// prepare data
$full_name = $form_data['full_name'];
$email = $form_data['email'];
$mobile = $form_data['mobile'];
$agreement = $form_data['agreement'];

// validation/sanitize
if (!$form_data['agreement']) {

    // returning json from php
    // https://stackoverflow.com/questions/4064444/returning-json-from-a-php-script
    array_push(
        $console_log,
        ["error" => "user did not agree to agreement"]
    );
}

// check for email duplication

// insert
$sql = "INSERT INTO user_contacts (full_name, email, mobile, agreement)
    VALUES ('$full_name', '$email', '$mobile', '$agreement');";

/* if ($conn->multi_query($sql) === TRUE) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
} */
$console_log = array_merge($console_log, [
    "success" => "inserted new data",
    "data" => [
        $full_name,
        $email,
        $mobile,
        $agreement,
    ]
]);

echo json_encode($console_log);

// close connection
$conn->close();
