import React from 'react';
import '../../App.css';
import Content from './AdminContent'
import AdminNavbar from './AdminNav';
function AdminHome() {
  return (
    <>
     <AdminNavbar></AdminNavbar>
     <Content></Content>
     
    </>
  );
}
export default AdminHome;