"use client"
import React from 'react'
import { styled } from "styled-components";
import { useState } from 'react';
import {Data} from './Data'
import * as XLSX from 'xlsx'



export default function ExcelUpload() {

  const [excelFile, setExcelFile] = useState(null)

  const [excelData, setExcelData] = useState(null)

  const  handleFile = (e:any) =>{

    let selectedFile = e.target.files
    if(selectedFile){
      console.log(selectedFile.type)
      let reader = new FileReader();
      reader.readAsArrayBuffer(selectedFile[0])
      reader.onload =(e) => {
        setExcelFile(e.target?.result as any)
      }
    }
    else{
      console.log('plz select your file')
    }
  }
  
  const handleSubmit = (e:any) =>{
    e.preventDefault();
    console.log("excelFile: ", excelFile)
    console.log("excelFile[0]: ", excelFile)
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile, {type: 'buffer'})
      const worksheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[worksheetName]
      const data:any = XLSX.utils.sheet_to_json(worksheet)
      setExcelData(data)
    }
    else{
      setExcelData(null)
    }
  } 
  return (
    <ExcelContainer>
    <Upload onSubmit={handleSubmit}>
      <label><h5>Upload Excel File</h5></label>
      <input type='file' onChange={handleFile} required></input>
      <button type='submit' className='btn btn-success' style={{marginTop: 5+ 'px'}}>Submit</button>
    </Upload>
    <ViewFile>
      <h5>View Excel File</h5>
      {excelData===null && <>No file selected</>}
      {excelData !== null ? 
      (<div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Gender</th>
              <th scope='col'>Country</th>
              <th scope='col'>Age</th>
              <th scope='col'>Date</th>
            </tr>
          </thead>
          <tbody>
            <Data excelData={excelData}/>
          </tbody>
        </table>
      </div>)
    :
      (<>nada</>)}
      
    </ViewFile>
    </ExcelContainer>
  )
}

const Upload = styled.form`
  color: black
`;

const ViewFile = styled.div`
  background-color: #e4e4e4;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 15px;
`;

const ExcelContainer = styled.div`
  background-color: #e4e4e4;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 15px;
`;

