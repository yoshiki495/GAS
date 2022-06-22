function registCalenderEvent() {
  const sheet = SpreadsheetApp.getActiveSheet(); 
  const value_array = sheet.getRange("A1:E2").getValues();
  let attend_array = value_array[1]
  let dict = {}
  for(let i=0; i<attend_array.length; i++){
    dict[i] = attend_array[i]
  }
  console.log(dict)
  //アクセス可能なカレンダーのIDを指定して、Googleカレンダーを取得する
  let myCalendar = CalendarApp.getCalendarById(');
  //Googleカレンダーに登録する日付を設定する
  let startDate = new Date();
  let endDate = new Date();
  endDate.setMonth(startDate.getMonth()+1);
  let createDate = new Date();
  while(createDate <= endDate) {
    //createEventメソッドによる予定登録
    attend = dict[createDate.getDay()]
    console.log(attend)
    if(attend!==''){
      myCalendar.createAllDayEvent(attend,createDate,
      {
        description: "",
        location: "",
        guests: "",
        sendInvites: false
      });
    }
    createDate.setDate(createDate.getDate()+1)
  }
}