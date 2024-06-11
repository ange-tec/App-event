<?php

namespace App\Models;

use \PDO;
use stdClass;

class EventModel extends SqlConnect {
  public function add(array $data) {
    $query = "
      INSERT INTO events (image, detail, description, date, category_id)
      VALUES (:image, :detail, :description, :date, :category_id)
    ";

    $req = $this->db->prepare($query);
    $req->execute($data);
  }

  public function getLast() {
    $req = $this->db->prepare("SELECT * FROM events ORDER BY id DESC LIMIT 1");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function delete(int $id) {
    $req = $this->db->prepare("DELETE FROM events WHERE id = :id");
    $req->execute(["id" => $id]);
  }

  public function get(int $id) {
    $req = $this->db->prepare("SELECT * FROM events WHERE id = :id");
    $req->execute(["id" => $id]);

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getAll() {
    $req = $this->db->prepare("SELECT * FROM events");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
  }
}