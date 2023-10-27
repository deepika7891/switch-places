import React from 'react';
import right from './Pic/right-arrow.png';
import left from './Pic/left-arrow.png';
import { useState, useEffect } from 'react';

function Checklist() {

  // container-1
  const [list, setList] = useState([]);
  const [listdata, setlistdata] = useState([]);
  const [checked, setChecked] = useState([]);

  const addTask = () => {
    if (list === '') {
      alert("enter your list.....")
    }
    else {
      setlistdata([...listdata, list]);
      setList('');
      console.log("add list 1", listdata);
      localStorage.setItem("listcontainer", JSON.stringify([...listdata, list]));
    }
  }
  useEffect(() => {
    getData()
    getData2()
  }, []);

  const handleCheck = (event) => {
    const value = event.target.value;
    const updatedList = [...checked];

    if (event.target.checked) {
      updatedList.push(value);
    } else {
      const index = updatedList.indexOf(value);
      if (index !== -1) {
        updatedList.splice(index, 1);
      }
    }
    setChecked(updatedList);
  };

  const Submit = () => {
    // e.preventDeafult();
    console.log("checkeditem", [checked]);
    const updateList = [];
    checked.forEach((data, i) => {
      console.log("updatelist:-", data, i);
      updateList.push(data);
      var array = [...listdata];
      var idx = array.indexOf(data);
      if (idx !== -1) {
        array.splice(idx, 1);
        setlistdata(array)
      }
    });

    const newListData = listdata.filter(item => !updateList.includes(item));
    setlistdata(newListData);
    console.log("newlistdata", newListData);

    setlistdata2([...listdata2, ...updateList]);
    localStorage.setItem("listcontainer2", JSON.stringify([...listdata2, ...updateList]));
    localStorage.setItem("listcontainer", JSON.stringify([...newListData]));
    getData();
  };


  const getData = () => {
    let data = JSON.parse(localStorage.getItem("listcontainer"));
    console.log("list container data");
    if (data && data.length > 0) {
      setlistdata(data);
    }
  }

  // container-2
  const [list2, setList2] = useState([]);
  const [listdata2, setlistdata2] = useState([]);
  const [checked2, setChecked2] = useState([]);

  const addTask2 = () => {
    if (list2 === '') {
      alert("enter your list....")
    }
    else {
      setlistdata2([...listdata2, list2]);
      setList2('');
      console.log("add list 2", listdata2);
      localStorage.setItem("listcontainer2", JSON.stringify([...listdata2, list2]));
    }
  }


  const handleCheck2 = (event) => {
    const value = event.target.value;
    var updatedList2 = [...checked2];

    if (event.target.checked2) {
      updatedList2.push(value);
    } else {
      const index = updatedList2.indexOf(value);
      if (index !== -1) {
        updatedList2.splice(index, 1);
      }
    }
    setChecked2(updatedList2);

  };

  const Submit2 = () => {
    console.log("checkeditem2", checked2);
    const updateList2 = [];
    checked2.forEach((data, i) => {
      console.log("updatelist 2:-", data, i);
      updateList2.push(data);
      var array2 = [...listdata2];
      var idx2 = array2.indexOf(data)
      if (idx2 !== -1) {
        array2.splice(idx2, 1);
        setlistdata2(array2)
      }
    });

    const newListData2 = listdata2.filter(item => !updateList2.includes(item));
    setlistdata2(newListData2);
    console.log("newlistdata2", newListData2);

    setlistdata([...listdata, ...updateList2]);
    localStorage.setItem("listcontainer", JSON.stringify([...listdata, ...updateList2]));
    localStorage.setItem("listcontainer2", JSON.stringify([...newListData2]));
    getData2();
  };

  const getData2 = () => {
    let data2 = JSON.parse(localStorage.getItem("listcontainer2"));
    console.log("list container 2 data");
    if (data2 && data2.length > 0) {
      setlistdata2(data2);
    }
  }
  return (
    <div className='container'>
      <div className='row '>
        <div className='col-5'>
          <div className='todo-list1'>
            <h1>list-Container</h1>
            <div>
              <textarea type="textarea" placeholder="Describe yourself here..." className='textarea' value={list}
                onChange={e => setList(e.target.value)} />
              <button type="button" onClick={addTask}>Add</button>
            </div>
            <ul>
              {listdata && listdata.map((data, i) => (
                <li key={i}>

                  <input value={data} type="checkbox" onChange={handleCheck} />
                  <span>{data}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
        <div className='col-2'>
          <img src={right} alt='right-arrow' className='right' onClick={() => Submit()} />
          <img src={left} alt='left-arrow' className='left' onClick={() => Submit2()} />
        </div>
        <div className='col-5'>
          <div className='todo-list2'>
            <h1>list-Container</h1>
            <div>
              <textarea type="textarea" placeholder="Describe yourself here..." className='textarea' value={list2}
                onChange={e => setList2(e.target.value)} />
              <button type="button" onClick={addTask2}>Add</button>
            </div>
            <ul>
              {listdata2 && listdata2.map((data, i) => (
                <li key={i}>
                  <input value={data} type="checkbox" onChange={handleCheck2} />
                  <span>{data}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}


export default Checklist
