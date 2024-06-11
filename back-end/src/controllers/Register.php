<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\UserModel;

class Register extends Controller {
  protected object $model;

  public function __construct($param) {
    $this->model = new UserModel();

    parent::__construct($param);
  }

  public function post() {
    $this->model->add($this->body);

    return $this->model->getLast();
  }

  protected function header() {
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json; charset=utf-8');
    header('Access-Control-Allow-Methods: PUT, GET, POST, OPTIONS, DELETE');
    header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");

    if ($this->reqMethod === 'options') {
      header('Access-Control-Max-Age: 86400');
      header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
      exit;
    }
  }

  protected function ifMethodExist() {
    $method = $this->reqMethod.''.$this->className;

    if (method_exists($this, $method)) {
      echo json_encode($this->$method());

      return;
    }

    header('HTTP/1.0 404 Not Found');
    echo json_encode([
      'code' => '404',
      'message' => 'Not Found'
    ]);

    return;
  }
}