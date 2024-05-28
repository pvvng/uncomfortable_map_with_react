function handleAppendData(settingLocalStorage, setSettingLocalStorage, value, type){
    let copy = {...settingLocalStorage};
    copy[type] = value;
    setSettingLocalStorage(copy);
}

function handleSetLocalStorage(toArrLocalStorage, settingLocalStorage, setToArrLocalStorage){
    let a = localStorage.getItem('저장된값')
    let 불러온값 = JSON.parse(a)
    if(JSON.parse(a) !== null){
        let copy = [...toArrLocalStorage];
        copy.push(settingLocalStorage);
        copy = [...불러온값, ...copy];
        setToArrLocalStorage(copy);
        localStorage.removeItem('저장된값');
        localStorage.setItem(`저장된값`, JSON.stringify(copy));
    }else{
        let copy = [...toArrLocalStorage];
        copy.push(settingLocalStorage);
        setToArrLocalStorage(copy)
        localStorage.setItem(`저장된값`, JSON.stringify(copy))
    }

}

export { handleAppendData, handleSetLocalStorage }