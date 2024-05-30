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
}