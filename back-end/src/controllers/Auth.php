<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\UserModel;

class Auth extends Controller {
  protected object $user;

  public function __construct($param) {
    $this->user = new UserModel();

    parent::__construct($param);
  }

  public function postAuth() {  //login and check user
    $action = $this->params["action"];

    if($action === "login"){
      return $this->login();
    } else if ($action === "check") {
      return $this->check();
    } else {
      header('HTTP/1.0 404 Not found');

      return [
        "code" => "404",
        "message" => "Not found"
      ];
    }
  }

  public function check() {   //check Id of session
   $sessionId = $this->body['sessionId'];

   session_id($sessionId);
   session_start();

   if (isset($_SESSION["user"])) {
    return $_SESSION["user"];
   } else {

    header('HTTP/1.0 404 Not Found');

    return [
      "code" => "404",
      "message" => "Not found"
    ];
   }

  }

  public function login() {   //get user by email
    $user = $this->user->getUserByEmail($this->body);

    $userChecking = (array) $user;

    if(empty($userChecking)){
      header('HTTP/1.0 404 Not Found');

      return [
        "code" => '404',
        "message"=> 'not found'
      ];
    }
 
    if(password_verify($this->body["password"], $user["password"])){  //start a session by checking password
      session_start();
      $sessionId = session_id();

      $_SESSION["user"] = $user;

      return [
        "sessionId"=> $sessionId
      ];
    }

    header('HTTP/1.0 401 Unauthorized');

    return ([
      'code' => '401',
      'message' => 'Unauthorized'
    ]);
  }
}
