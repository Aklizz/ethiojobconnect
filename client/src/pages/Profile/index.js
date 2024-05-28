import React from "react";
import { Tabs } from "antd";
import Products from "./Products";

function Profile() {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Services |  የአገልግሎት ዘርፍ" key="1">
          <Products />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Bids | የዋጋ ጨረታዎች" key="2">
          <h1>Bids | የዋጋ ጨረታዎች</h1>
        </Tabs.TabPane>
        <Tabs.TabPane tab="General | አጠቃላይ" key="3">
          <h1>General | አጠቃላይ</h1>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;
