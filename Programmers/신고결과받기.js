function solution(id_list, report, k) {
  let users = {}
  id_list.forEach(id => {
      users[id] = []
  })
  
  let reported_users = {}
  id_list.forEach(id => {
      reported_users[id] = 0
  })
  
  report.forEach(rpt => {
      let tmp = rpt.split(' ')
      let reporter = tmp[0]
      let reported = tmp[1]
      if (users[reporter].includes(reported) === false) {
          users[reporter].push(reported)
          reported_users[reported] ++ 
      }
  })
  
  let mailCount = {}
  id_list.forEach(id => {
      mailCount[id] = 0
  })
  
  for (const [key, value] of Object.entries(users)) {
        value.forEach(id => {
            if (reported_users[id] >= k) {
                mailCount[key] ++
            }
        })
      }
  let answer = Object.values(mailCount)
  return answer;
}