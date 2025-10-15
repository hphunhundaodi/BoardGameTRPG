// ======================================= 小隐大世界KP
export const BigWorldXiaoyin = [
  {
    "name": "黑暗边缘",
    "originName": "The Edge of Darkness",
    "description": "",
    "players": "4-6人",
    "duration": "4-6h",
    "difficulty": 0,
    "tags": ["新手启蒙"],
    "era": "1920美国",
    "requirements": "车卡",
    "isNewbie": true,
    "type": "coc",
    "kp": "小隐",
    "author": "",
    "skills": "",
    "notes": "",
    "mastery": ""
  },
  {
    "name": "古树林中",
    "originName": "In the Woods",
    "description": "",
    "players": "4-6人",
    "duration": "6-8h",
    "difficulty": 1,
    "tags": ["进阶"],
    "era": "1920美国",
    "requirements": "车卡",
    "isNewbie": false,
    "type": "coc",
    "kp": "小隐",
    "author": "",
    "skills": "",
    "notes": "",
    "mastery": ""
  },
  {
    "name": "雪肌",
    "originName": "Snow White",
    "description": "",
    "players": "4-6人",
    "duration": "6-8h",
    "difficulty": 2,
    "tags": [],
    "era": "1920美国",
    "requirements": "车卡",
    "isNewbie": false, // 标准
    "type": "coc",
    "kp": "小隐",
    "author": "",
    "skills": "",
    "notes": "",
    "mastery": ""
  },
  {
    "name": "猩红文档",
    "originName": "The Scarlet Document",
    "description": "",
    "players": "4-6人",
    "duration": "8-16h",
    "difficulty": 3,
    "tags": [],
    "era": "1920美国",
    "requirements": "车卡",
    "isNewbie": false, // 标准
    "type": "coc",
    "kp": "小隐",
    "author": "",
    "skills": "",
    "notes": "",
    "mastery": ""
  },
  {
    "name": "鲜花与灰烬",
    "originName": "Flowers in Ashes",
    "description": "",
    "players": "4-6人",
    "duration": "6-12h",
    "difficulty": 3,
    "tags": [],
    "era": "1920美国",
    "requirements": "车卡",
    "isNewbie": false, // 标准
    "type": "coc",
    "kp": "小隐",
    "author": "",
    "skills": "",
    "notes": "",
    "mastery": ""
  },
  {
    "name": "星之彩·远航",
    "originName": "Star-Spangled Banner",
    "description": "",
    "players": "4-6人",
    "duration": "5-8h",
    "difficulty": 2,
    "tags": [],
    "era": "1920美国",
    "requirements": "车卡",
    "isNewbie": false, // 标准
    "type": "coc",
    "kp": "小隐",
    "author": "",
    "skills": "",
    "notes": "",
    "mastery": ""
  },
]
export const BigWorldXiaoyinKey = BigWorldXiaoyin.map(el => el.name)

// ======================================= 合并并排序的模组列表
export const BigWorldAllModules = [...BigWorldXiaoyin]
  .sort((a, b) => {
    // 首先按 isNewbie 排序，true 的排在前面
    if (a.isNewbie !== b.isNewbie) {
      return a.isNewbie ? -1 : 1
    }
    // 然后按 difficulty 从小到大排序
    return a.difficulty - b.difficulty
  })