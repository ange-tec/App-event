<?php

namespace App\Models;

use \PDO;
use stdClass;

class CategoryModel extends SqlConnect {

  public function add(array $data) {
    $query = "
      INSERT INTO categories (name)
      VALUES (:name)
    ";

    $req = $this->db->prepare($query);
    $req->execute($data);
  }

  public function get(int $id) {
    $req = $this->db->prepare("SELECT * FROM categories WHERE id = :id");
    $req->execute(["id" => $id]);

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }
}