import React, { useContext } from "react";
import { BoardContext } from "./provider/BoardProvider";
import { Link } from "react-router-dom";
import styles from "./App.module.css";
import Card from 'react-bootstrap/Card';

export default function App() {
  const { boards } = useContext(BoardContext);
  return (
    <section className={styles.componentApp}>
      <h3 className={styles.title}>ホーム</h3>
      <div>
        <p style={{ fontSize: "1.2em" }}>最近開いたボード</p>
        <div className={styles.boardList}>
          {boards.slice(0, 3).map(item => {
            return (
              <Card style={{ width: "300px", marginRight: "15px" }}>
                <Card.Header>{item.name}</Card.Header>
                <Card.Body>
                  <Card.Text style={{ height: "100px", whiteSpace:"pre-wrap" }}>
                    {item.content}
                  </Card.Text>
                  <Link to={`/boards/id/${item.id}`}>詳細</Link>
                </Card.Body>
              </Card>
            )
          })}
        </div>
        <Link to="/boards">ボード管理</Link>
      </div>
      <hr />
    </section>
  );
}