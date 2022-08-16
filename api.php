<?php
    //your code
    header('Content-Type: application/json');
  


    $data = [];
if (file_exists(DATA_FILE_NAME)) {
    $content = file_get_contents(DATA_FILE_NAME);
    $data = json_decode($content, true);
    if (!is_array($data)) {
        $data = [];
    }
}

$output = ['status' => false];

if (
    isset($_GET['api-name']) &&
    is_string($_GET['api-name'])
) {
    if (
        isset($_POST['subscriber_email']) &&
        is_string($_POST['subscriber_email'])
    ) {
        /*
        if (!array_key_exists($_POST['subscriber_email'], array_flip($data))) {
        */
        if (!in_array($_POST['subscriber_email'], $data)) {
            $data[] = $_POST['subscriber_email'];

            $content = json_encode($data);
            file_put_contents(DATA_FILE_NAME, $content);
            $output = [
                'status' => true,
                'message' => 'subcriber email has been stored'
            ];
        }
    }
}


echo json_encode($output, JSON_PRETTY_PRINT);

 echo "store data $b"
?>
