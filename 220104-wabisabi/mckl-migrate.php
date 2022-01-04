<?php
// cross-origin setting - read more?
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
/* header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json'); */

// db_connect
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mckledum_unodbv2";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$console_log = array();

// check/create table
$table_user_contacts = ("select * from uno_news");
if ($conn->query($table_user_contacts)) {
    foreach ($conn->query($table_user_contacts) as $contact) {

        // var_dump($contact);
        // echo '<br>';
        print_r($contact['ID']);
        echo '<br>';
        print_r($contact['Title']);
        echo '<br>';
        print_r($contact['Description']);
        echo '<br>';
        print_r($contact['BrowserTitle']);
        echo '<br>';
        print_r($contact['MetaKeyword']);
        echo '<br>';
        print_r($contact['MetaDesc']);
        echo '<br>';
        print_r($contact['Thumbnail']);
        echo '<br>';
        print_r($contact['DateCreated']);
        echo '<br>';
        print_r($contact['DateModified']);
        echo '<br>';
        print_r($contact['PublishStart']);
        echo '<br>';
        print_r($contact['PublishEnd']);
        echo '<br>';
        print_r($contact['Status']);
        echo '<br><br>';
    }
}


// // get data via axios
// // https://www.codegrepper.com/code-examples/php/axios+post+to+php
// // https://zerowp.com/sending-axios-parameters-with-a-post-request-in-php/
// $form_data = json_decode(file_get_contents("php://input"), true);
// /* print_r($form_data); */

// if (!isset($form_data['full_name']) && !isset($form_data['agreement'])) {

//     // return error
//     array_push(
//         $console_log,
//         ["error" => "No form_data found (full_name, agreement)"]
//     );
// }

// // prepare data
// $full_name = $form_data['full_name'];
// $email = $form_data['email'];
// $mobile = $form_data['mobile'];
// $agreement = $form_data['agreement'];

// // validation/sanitize
// if (!$form_data['agreement']) {


//     // returning json from php
//     // https://stackoverflow.com/questions/4064444/returning-json-from-a-php-script
//     array_push(
//         $console_log,
//         ["error" => "user did not agree to agreement"]
//     );
// }

// // check for email duplication

// // insert
// $sql = "INSERT INTO user_contacts (full_name, email, mobile, agreement)
//     VALUES ('$full_name', '$email', '$mobile', '$agreement');";

// /* if ($conn->multi_query($sql) === TRUE) {
//     echo "New records created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// } */
// $console_log = array_merge($console_log, [
//     "success" => "inserted new data",
//     "data" => [
//         $full_name,
//         $email,
//         $mobile,
//         $agreement,
//     ]
// ]);

// echo json_encode($console_log);

// close connection
$conn->close();
