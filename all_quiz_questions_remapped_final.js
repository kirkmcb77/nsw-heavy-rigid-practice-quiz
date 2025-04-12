const allQuestions = [
  {
    "id": "q1",
    "question": "ICAC1 - What will happen if you are caught cheating on the knowledge test?",
    "options": [
      "You will not be allowed to take another test for 6 weeks.",
      "You will never be allowed to take another test.",
      "Nothing, there is no penalty."
    ],
    "answer": 1
  },
  {
    "id": "q2",
    "question": "ICAC2 - What will happen if you offer a testing officer a bribe to pass your driving test?",
    "options": [
      "Action will be taken against you. The penalties are severe and include fines and imprisonment.",
      "Only the testing officer will be investigated.",
      "Nothing, there is no penalty."
    ],
    "answer": 1
  },
  {
    "id": "q3",
    "question": "ICAC3 - What will happen if a testing officer asks you for a bribe to pass your driving test and you give it to him or her?",
    "options": [
      "Action will be taken against all involved. The penalties are severe and include fines and imprisonment.",
      "Nothing, there is no penalty.",
      "Only the testing officer will be investigated."
    ],
    "answer": 1
  },
  {
    "id": "q4",
    "question": "CG001 - Can a P1 or P2 provisional driver legally instruct a learner driver?",
    "options": [
      "No.",
      "Yes, provided the provisional driver has held a P2 licence for more than 6 months.",
      "Yes, provided L and P1 or P2 plates are displayed."
    ],
    "answer": 1
  },
  {
    "id": "q5",
    "question": "CG010 - If you intend to turn left, are you required to give a signal?",
    "options": [
      "Yes, if turn signals are fitted to your vehicle.",
      "No, if turning left from a lane marked left turn only.",
      "No, if arrows are marked on the roadway."
    ],
    "answer": 1,
    "image": "./images/output-000.png"
  },
  {
    "id": "q6",
    "question": "CG013 - What is meant by this sign on or near a bridge?",
    "options": [
      "Slow down and be prepared to give way to vehicles travelling in the opposite direction.",
      "Stop at all times before crossing the bridge and only give way to pedestrians who may be crossing.",
      "Do not overtake a vehicle travelling in the same direction."
    ],
    "answer": 1,
    "image": "./images/output-001.png"
  },
  {
    "id": "q7",
    "question": "CG014 - When reversing, you should \u2013",
    "options": [
      "Take care and never reverse for a greater distance and time than is necessary.",
      "Unbuckle your seat belt so you can reverse as quickly as possible.",
      "Sound your horn to warn other drivers."
    ],
    "answer": 1,
    "image": "./images/output-002.png"
  },
  {
    "id": "q8",
    "question": "CG016 - How close can you park to another vehicle when parked parallel to the kerb?",
    "options": [
      "You must leave at least 1 metre front and back.",
      "You must leave at least 2 metres from the front only.",
      "You must leave at least 3 metres front and back."
    ],
    "answer": 1
  },
  {
    "id": "q9",
    "question": "CG017 - Where there is parallel kerbside parking, are you allowed to double-park alongside a parked vehicle?",
    "options": [
      "No, not at any time.",
      "Yes, if delivering goods.",
      "Yes, if not obstructing traffic."
    ],
    "answer": 1
  },
  {
    "id": "q10",
    "question": "CG018 - Do you have any responsibilities when opening a vehicle door on a roadway?",
    "options": [
      "Yes, you must not open a door if you are likely to cause danger to road users or impede traffic.",
      "No, any following traffic must stop if the door interferes with its progress.",
      "No, there is no regulation to cover this situation."
    ],
    "answer": 1
  },
  {
    "id": "q11",
    "question": "CG027 - Are you permitted to park on a median strip or traffic island?",
    "options": [
      "No, not at any time.",
      "Yes, in daylight hours.",
      "Yes, but for no more than 30 minutes."
    ],
    "answer": 1
  },
  {
    "id": "q12",
    "question": "CG029 - When driving at sunset or dawn on a dark day, what should you do?",
    "options": [
      "Turn on your lights on low beam.",
      "Keep your sunglasses on to cut down headlight glare.",
      "Turn on your hazard warning lights."
    ],
    "answer": 1
  },
  {
    "id": "q13",
    "question": "CG030 - You are driving at night with your headlights on high beam. When should you dip your headlights?",
    "options": [
      "When within 200 metres of the vehicle ahead or an oncoming one.",
      "When within 200 metres of an oncoming vehicle only.",
      "Never, you are allowed to drive with your lights on high beam at all times."
    ],
    "answer": 1
  },
  {
    "id": "q14",
    "question": "CG031 - You are driving in a 60 km/h zone with only one lane for traffic in your direction. You see a bus ahead (with this sign on the rear) signalling its intention to pull out from a bus stop. You should \u2013",
    "options": [
      "Slow down, and give way to the bus as it has priority.",
      "Sound your horn to stop the bus from pulling out.",
      "Continue at your normal speed as the bus does not have priority."
    ],
    "answer": 1,
    "image": "./images/output-003.png"
  },
  {
    "id": "q15",
    "question": "CG032 - Is it an offence to obstruct clear vision of your number plates?",
    "options": [
      "Yes, at any time.",
      "Yes, but it is legal for a towbar or bicycle rack to cover the rear number plate.",
      "No, you are allowed to cover your number plates if you want to."
    ],
    "answer": 1
  },
  {
    "id": "q16",
    "question": "CG034 - Before driving on a freeway, which of the following should you do?",
    "options": [
      "Make sure your vehicle has enough fuel, oil, water and the correct tyre pressure.",
      "Take your street directory in case you get lost.",
      "Take something to calm your nerves before driving."
    ],
    "answer": 1
  },
  {
    "id": "q17",
    "question": "CG035 - What must you do if you miss your exit on a freeway?",
    "options": [
      "Continue until you reach the next appropriate exit.",
      "Stop, and reverse back along the freeway to the exit you missed.",
      "Stop immediately and turn around."
    ],
    "answer": 1
  },
  {
    "id": "q18",
    "question": "CG036 - As you leave a freeway, which of the following should you check?",
    "options": [
      "Your speed.",
      "Fuel gauge.",
      "Windscreen wipers."
    ],
    "answer": 1
  },
  {
    "id": "q19",
    "question": "CG043 - If an oncoming vehicle crosses the centre line and is coming straight at you and you cannot stop, you should \u2013",
    "options": [
      "Brake, look for room to the left, sound your horn and flash your lights.",
      "Slow down and hope that the driver will turn away.",
      "Drive onto the wrong side of the road and hope the other vehicle does not do the same."
    ],
    "answer": 1
  },
  {
    "id": "q20",
    "question": "CG044 - If you are involved in an accident where your vehicle needs to be towed away and the Police does not attend the crash scene, you \u2013",
    "options": [
      "Must report the accident to the Police Station nearest to where the accident happened within 24 hours.",
      "Do not need to report the accident to the Police.",
      "Only need to report the accident to the Police if someone was injured."
    ],
    "answer": 1
  },
  {
    "id": "q21",
    "question": "CG045 - If your vehicle is involved in an accident (regardless of the damage), what details must you give to the other driver(s) if asked?",
    "options": [
      "You must let them see your licence, take details, and give the name and address of the vehicle's owner.",
      "No details at all until you have contacted your insurance company.",
      "Only your name and address details if a Policeman asks for them."
    ],
    "answer": 1,
    "image": "./images/output-004.png"
  },
  {
    "id": "q22",
    "question": "CG046 - If a vehicle you are driving is involved in an accident and a person is injured, what must you do after stopping?",
    "options": [
      "Render every assistance and take immediate steps to have an ambulance notified. Then call the Police.",
      "Only call the Police if the accident also resulted in over $500 worth of property damage.",
      "Report the accident to Police within seven days."
    ],
    "answer": 1,
    "image": "./images/output-004.png"
  },
  {
    "id": "q23",
    "question": "CG047 - Stop signs or flashing lights at railway crossings should always be obeyed, because \u2013",
    "options": [
      "Trains are fast, heavy and cannot stop quickly.",
      "Pedestrians might be crossing.",
      "Car brakes often fail."
    ],
    "answer": 1
  },
  {
    "id": "q24",
    "question": "CG048 - You should not drive across a railway level crossing when \u2013",
    "options": [
      "Traffic is blocking the other side.",
      "You are towing a caravan.",
      "A station is nearby."
    ],
    "answer": 1
  },
  {
    "id": "q25",
    "question": "CG049 - You should use your right-hand indicator when \u2013",
    "options": [
      "You intend to move to the right, at any time.",
      "You intend to slow down.",
      "You are about to stop."
    ],
    "answer": 1
  },
  {
    "id": "q26",
    "question": "CG052 - When merging onto the freeway from the entrance, you should \u2013",
    "options": [
      "Look for a large enough break in the traffic and adjust your speed so as to fit into the traffic flow.",
      "Sound your horn, turn on your indicator lights and move onto the freeway.",
      "Stop and check the traffic behind you on the entrance."
    ],
    "answer": 1
  },
  {
    "id": "q27",
    "question": "CG053 - If you see a sign indicating road repairs are going on, you should \u2013",
    "options": [
      "Slow down and watch for traffic controllers and instructions.",
      "Stop immediately and wait for instructions.",
      "Maintain the same speed."
    ],
    "answer": 1
  },
  {
    "id": "q28",
    "question": "CG055 - You see a broken yellow line painted on the roadway adjacent to the kerb. What does it mean?",
    "options": [
      "Clearway restrictions apply - you must not stop during the clearway hours.",
      "You may at any time, park along this part of the road for 1 hour only.",
      "Bicycle riders must ride along the yellow line."
    ],
    "answer": 1
  },
  {
    "id": "q29",
    "question": "CG056 - If you see a horse and rider on the road what should you do?",
    "options": [
      "Slow down and give them plenty of room.",
      "Sound your horn to warn the rider.",
      "Speed up to pass the horse."
    ],
    "answer": 1
  },
  {
    "id": "q30",
    "question": "CG062 - What are you required to do if you develop a serious medical condition that could affect your driving?",
    "options": [
      "Once you become aware of the condition you must notify the RTA.",
      "Hand your licence in at the nearest police station.",
      "Tell your doctor and let him or her notify the RTA."
    ],
    "answer": 1
  },
  {
    "id": "q31",
    "question": "CG070 - You hold an unrestricted licence and are driving at 100 km/h in the country and pass this sign. What should you do?",
    "options": [
      "Slow down to a speed that will allow you to stop to avoid crashing into farm animals on the road.",
      "You can continue to drive at 100 km/h if there are fences to stop farm animals from getting on the road.",
      "For the next 5 kilometres you must not exceed 60 km/h unless you pass an end farm animals speed limit sign."
    ],
    "answer": 1,
    "image": "./images/output-006.png"
  },
  {
    "id": "q32",
    "question": "CG071 - You are turning right from one of two right turn only lanes. How should you use your indicators?",
    "options": [
      "Indicate with your right hand signal the same as any other right hand turn.",
      "You should not indicate at all because it might confuse other drivers.",
      "Indicating in this situation is optional. Give a right hand signal if you think it will help other road users."
    ],
    "answer": 1,
    "image": "./images/output-007.png"
  },
  {
    "id": "q33",
    "question": "CG075 - You are driving on a freeway and realise you forgot something at home. You want to go back for it. Can you do a U-turn on this road?",
    "options": [
      "No, not at any time.",
      "Yes, any time.",
      "Yes, providing you use the gravel joining roads."
    ],
    "answer": 1,
    "image": "./images/output-008.png"
  },
  {
    "id": "q34",
    "question": "CG080 - You have just passed this sign. Can you park on this road?",
    "options": [
      "No, not at any time.",
      "Yes.",
      "Yes, but only in daylight hours."
    ],
    "answer": 1
  },
  {
    "id": "q35",
    "question": "CG086 - This bridge has only just enough room for two vehicles. As you come close to it you should \u2013",
    "options": [
      "Slow down and pay extra attention.",
      "Sound your horn to warn the other driver.",
      "Maintain your speed, keeping to the limit."
    ],
    "answer": 1,
    "image": "./images/output-009.png"
  },
  {
    "id": "q36",
    "question": "CG090 - You hear the siren of an ambulance approaching you from behind. You should \u2013",
    "options": [
      "Move into the left lane.",
      "Slow down to the speed of other traffic.",
      "Continue at the same speed."
    ],
    "answer": 1,
    "image": "./images/output-010.png"
  },
  {
    "id": "q37",
    "question": "CG091 - You are driving along this road. You hear an ambulance's siren and see the ambulance in your mirror. You should \u2013",
    "options": [
      "Move to the left and make way for the ambulance.",
      "Turn into a driveway on the right hand side of the road.",
      "Move to the right and make way for the ambulance."
    ],
    "answer": 1,
    "image": "./images/output-011.png"
  },
  {
    "id": "q38",
    "question": "CG093 - When you come across roadworks \u2013",
    "options": [
      "You must obey the signs that are displayed at all times.",
      "You only have to obey the signs when there are workers about.",
      "You only have to obey the signs during working hours."
    ],
    "answer": 1,
    "image": "./images/output-012.png"
  },
  {
    "id": "q39",
    "question": "CG094 - Generally, if you hear the siren of an emergency vehicle you should \u2013",
    "options": [
      "Pull over to the left until the emergency vehicle passes.",
      "Immediately come to a stop.",
      "Let the emergency vehicle pass and follow it closely behind."
    ],
    "answer": 1
  },
  {
    "id": "q40",
    "question": "CG099 - When you see these lights flashing on the back of a bus, what should you do?",
    "options": [
      "Drive carefully at no more than 40 km/h.",
      "Overtake the bus only while the lights are flashing.",
      "Stop and wait for the lights to stop flashing."
    ],
    "answer": 1,
    "image": "./images/output-013.png"
  },
  {
    "id": "q41",
    "question": "CG100 - You are driving at night and there is no other traffic around you. When can you use your headlights on high beam?",
    "options": [
      "On any road, even if there are street lights.",
      "On any road where the speed limit is above 80 km/h.",
      "Only on roads that do not have street lights."
    ],
    "answer": 1,
    "image": "./images/output-014.png"
  },
  {
    "id": "q42",
    "question": "CG102 - You want to park your vehicle for a short time. It is night time. You should \u2013",
    "options": [
      "Pick a visible position or leave the parking or hazard lights on.",
      "Park on the footpath.",
      "Leave your headlights on high beam."
    ],
    "answer": 1,
    "image": "./images/output-015.png"
  },
  {
    "id": "q43",
    "question": "CG105 - When you are driving on a two-lane freeway, which lane should you choose?",
    "options": [
      "The left lane unless you are overtaking.",
      "Whichever lane has the least traffic.",
      "The right lane to avoid slow-moving vehicles."
    ],
    "answer": 1,
    "image": "./images/output-016.png"
  },
  {
    "id": "q44",
    "question": "CG112 - You are driving your vehicle along a street and want to stop for a short time. Are you allowed to double park your vehicle (i.e. stand it on the road alongside a parked car)?",
    "options": [
      "No, never.",
      "Yes, provided you do not leave the vehicle.",
      "Yes, provided you stop for a short time only and turn on your hazard warning lights."
    ],
    "answer": 1,
    "image": "./images/output-017.jpg"
  },
  {
    "id": "q45",
    "question": "CG113 - Looking at the diagrams, how far from the approach side of a bus stop or railway crossing are you allowed to stand or park your vehicle?",
    "options": [
      "At least 20 metres.",
      "At least 50 metres.",
      "At least 5 metres."
    ],
    "answer": 1,
    "image": "./images/output-018.jpg"
  },
  {
    "id": "q46",
    "question": "CG115 - Are you required to carry your driver\u2019s licence with you every time you drive?",
    "options": [
      "Yes.",
      "No \u2013 it is only needed on long trips.",
      "No, being licensed is enough."
    ],
    "answer": 1
  },
  {
    "id": "q47",
    "question": "CG116 - Bicycle and motorcycle riders have the same rights to use the road as other motor vehicle drivers. They are, however, more at risk in traffic because \u2013",
    "options": [
      "They are harder to see in traffic and do not have the same protection as many drivers.",
      "They are careless and do not obey road rules.",
      "They ride too fast and do not turn their lights on."
    ],
    "answer": 1
  },
  {
    "id": "q48",
    "question": "CG117 - To drive safely, you need to concentrate and monitor everything happening on the road. To do this, you need to \u2013",
    "options": [
      "Continually scan the road, looking ahead, to the sides, checking mirrors and anticipating what may happen.",
      "Turn all your attention only to the road ahead.",
      "Ask other occupants to watch out for possible dangers."
    ],
    "answer": 1
  },
  {
    "id": "q49",
    "question": "CG118 - If you are driving towards a road works zone and a traffic controller displays a stop sign you must \u2013",
    "options": [
      "Stop your vehicle and follow the directions of the traffic controller.",
      "Stop and then proceed if you think it is safe.",
      "Slow down and continue through the road works zone."
    ],
    "answer": 1
  },
  {
    "id": "q50",
    "question": "CG119 - If you are driving through a road work zone in the left-hand lane and you see this sign you should \u2013",
    "options": [
      "Merge to the right and give way to other traffic.",
      "Speed up to get in front of any cars traveling in the right-hand lane.",
      "Stop and wait for directions."
    ],
    "answer": 1,
    "image": "./images/output-019.jpg"
  },
  {
    "id": "q51",
    "question": "CG122 - Do bicycle riders have the same rights and responsibilities as drivers and motorcycle riders?",
    "options": [
      "Yes.",
      "No \u2013 they must always ride on the footpath.",
      "No \u2013 they must give way to cars at all times when riding on the road."
    ],
    "answer": 1
  },
  {
    "id": "q52",
    "question": "CG123 - Before getting out of your vehicle you must \u2013",
    "options": [
      "Check your mirrors and blind spots for pedestrians, bicycles, or other vehicles.",
      "Check your seatbelt is back in place.",
      "Check your headlights are turned off."
    ],
    "answer": 1,
    "image": "./images/output-014.png"
  },
  {
    "id": "q53",
    "question": "LG001 - What is the maximum allowable length of a rigid vehicle, including its load?",
    "options": [
      "12.5 metres.",
      "15.5 metres.",
      "14 metres."
    ],
    "answer": 1
  },
  {
    "id": "q54",
    "question": "LG002 - What is the maximum allowable length of an articulated vehicle including its load?",
    "options": [
      "19 metres.",
      "25 metres.",
      "10 metres."
    ],
    "answer": 1
  },
  {
    "id": "q55",
    "question": "LG003 - What is the maximum allowable height of a single deck vehicle, including its load?",
    "options": [
      "4.3 metres.",
      "0.3 metres.",
      "5.1 metres."
    ],
    "answer": 1
  },
  {
    "id": "q56",
    "question": "LG004 - Provided the total width of a vehicle does not exceed 2.5 metres, a load must not overhang to the sides by more than \u2013",
    "options": [
      "150 millimetres.",
      "200 millimetres.",
      "250 millimetres."
    ],
    "answer": 1
  },
  {
    "id": "q57",
    "question": "LG009 - When are you allowed to make a turn from a lane next to the left-hand lane?",
    "options": [
      "When driving a vehicle over 7.5 metres long with a 'DO NOT OVERTAKE TURNING VEHICLE' sign on the rear.",
      "When driving a vehicle under 7.5 metres long.",
      "When driving a vehicle over 7.5 metres long."
    ],
    "answer": 1,
    "image": "./images/output-020.png"
  },
  {
    "id": "q58",
    "question": "LG011 - You are driving a vehicle with a GVM of more than 12 tonnes. Your vehicle breaks down on a road without street lights. What must you do to warn other vehicles?",
    "options": [
      "Put warning triangles at the side and between 50 and 150 metres to the front and rear of the vehicle.",
      "Put warning triangles 100 metres to the rear and 50 metres to the front only.",
      "Attach warning triangles to the front and rear of the vehicle."
    ],
    "answer": 1
  },
  {
    "id": "q59",
    "question": "LG012 - If you are driving a truck when should you move into a lane marked by this sign?",
    "options": [
      "Only when your truck has a GVM greater than 4.5 tonnes.",
      "Only when your truck has a GVM greater than 13.9 tonnes.",
      "Only when the road is on a steep hill."
    ],
    "answer": 1,
    "image": "./images/output-021.jpg"
  },
  {
    "id": "q60",
    "question": "LG013 - What sort of vehicles must obey this sign?",
    "options": [
      "Only vehicles with a GVM greater than 4.5 tonnes.",
      "Only vehicles with a GVM greater than 13.9 tonnes.",
      "Only articulated vehicles."
    ],
    "image": "./images/output-022.png",
    "answer": 1
  },
  {
    "id": "q61",
    "question": "LG022 - What is a vehicle monitor used for?",
    "options": [
      "To automatically record details about vehicle operation at all times.",
      "To record details about vehicle operation only when the engine is turned on.",
      "To record driving hours only."
    ],
    "answer": 1
  },
  {
    "id": "q62",
    "question": "LG023 - Which one of the following vehicles does not need a vehicle monitor?",
    "options": [
      "A bus used only as a school bus.",
      "A bus which regularly travels interstate.",
      "A truck with a GVM greater than 13.9 tonnes."
    ],
    "answer": 1
  },
  {
    "id": "q63",
    "question": "LG024 - What is the maximum length for a rigid vehicle?",
    "options": [
      "12.5 metres.",
      "10.5 metres.",
      "12 metres."
    ],
    "answer": 1
  },
  {
    "id": "q64",
    "question": "LG025 - What is the maximum height for a single deck bus?",
    "options": [
      "4.3 metres.",
      "4.6 metres.",
      "3.8 metres."
    ],
    "answer": 1
  },
  {
    "id": "q65",
    "question": "LG026 - What is the maximum width for a rigid vehicle?",
    "options": [
      "2.5 metres.",
      "2.3 metres.",
      "2.7 metres."
    ],
    "answer": 1
  },
  {
    "id": "q66",
    "question": "LG029 - If your vehicle has air brakes, how often should you drain the air tanks?",
    "options": [
      "Every day.",
      "Every 2 days.",
      "Every 7 days."
    ],
    "answer": 1
  },
  {
    "id": "q67",
    "question": "LG036 - What does this sign mean?",
    "options": [
      "The gear you choose must control the vehicle\u2019s speed without the use of brakes.",
      "The gear you choose must control the vehicle\u2019s speed if you use the brakes as well.",
      "You must drive in first gear."
    ],
    "answer": 1,
    "image": "./images/output-023.png"
  },
  {
    "id": "q68",
    "question": "LG038 - You are driving a bus that displays this sign and there are no street lights or houses along the road \u2013",
    "options": [
      "You do not have right of way when you pull out from a bus stop.",
      "You have right of way when you pull out from a bus stop.",
      "You have right of way only if not crossing a lane line."
    ],
    "answer": 1,
    "image": "./images/output-024.png"
  },
  {
    "id": "q69",
    "question": "LG039 - What should you do if you are driving a bus in the \u2018bus only lane\u2019 and you come to a white \u2018B\u2019 signal?",
    "options": [
      "Go through the intersection as you would with a regular green light.",
      "Stop until the \u2018B\u2019 signal turns red.",
      "Stop until the regular traffic lights turn green."
    ],
    "answer": 1,
    "image": "./images/output-025.png"
  },
  {
    "id": "q70",
    "question": "LG040 - Which vehicle in the diagram are you permitted to drive with a medium rigid licence?",
    "options": [
      "Vehicle C.",
      "Vehicle A.",
      "Vehicle B."
    ],
    "answer": 1,
    "image": "./images/output-026.png"
  },
  {
    "id": "q71",
    "question": "LG042 - When must the rear of your heavy vehicle display the retro-reflective marking plates?",
    "options": [
      "When your vehicle has a GVM of more than 12 tonnes.",
      "When your vehicle is 9 metres or longer and is over 8 tonnes GVM.",
      "When driving a route bus in urban areas."
    ],
    "answer": 1,
    "image": "./images/output-039.png"
  },
  {
    "id": "q72",
    "question": "LG043 - Many accidents occur when heavy vehicles are reversing. In which diagram is a helper best placed to guide you?",
    "options": [
      "Diagram C.",
      "Diagram A.",
      "Diagram B."
    ],
    "answer": 1,
    "image": "./images/output-040.png"
  },
  {
    "id": "q73",
    "question": "LG045 - The diagram shows a priority sign for buses. Which statement is correct?",
    "options": [
      "Priority applies when the bus is travelling in a built-up area.",
      "Priority applies at all times.",
      "Priority does not apply when the speed limit is 40 km/h."
    ],
    "answer": 1,
    "image": "./images/output-003.png"
  },
  {
    "id": "q74",
    "question": "LG048 - The diagram shows a portable warning triangle. When MUST it be used?",
    "options": [
      "When your vehicle (over 12 tonnes) is not visible for 200 metres.",
      "When your vehicle weighs less than 12 tonnes and you are on a road without street lights.",
      "When you break down regardless of your vehicle\u2019s size."
    ],
    "answer": 1,
    "image": "./images/output-043.png"
  },
  {
    "id": "q75",
    "question": "LG049 - A vehicle over 12 tonnes GVM has broken down on a country road. Has the driver placed the warning signs correctly?",
    "options": [
      "No.",
      "Yes.",
      "It does not matter as warning signs are not required."
    ],
    "answer": 1,
    "image": "./images/output-044.png"
  },
  {
    "id": "q76",
    "question": "LG050 - When are you required to carry your licence when driving?",
    "options": [
      "Always when driving.",
      "Only if driving a vehicle over 15 tonnes GVM.",
      "Only when driving outside of NSW."
    ],
    "answer": 1
  },
  {
    "id": "q77",
    "question": "LG051 - Can a driver with a Medium Rigid (MR) licence drive the vehicle shown?",
    "options": [
      "No.",
      "Yes.",
      "Only if the owner gives special permission."
    ],
    "answer": 1,
    "image": "./images/output-045.png"
  },
  {
    "id": "q78",
    "question": "LG052 - What is the minimum licence class required to drive the vehicle shown?",
    "options": [
      "Heavy Combination (HC).",
      "Heavy Rigid (HR).",
      "Multi-Combination (MC)."
    ],
    "answer": 3,
    "image": "./images/output-046.png"
  },
  {
    "id": "q79",
    "question": "LG054 - The maximum height of all vehicles in NSW (except for double deck buses and certain commercial vehicles) is \u2013",
    "options": [
      "4.3 metres.",
      "4.4 metres.",
      "4.6 metres."
    ],
    "answer": 1
  },
  {
    "id": "q80",
    "question": "LG055 - What is the maximum width for all vehicles?",
    "options": [
      "2.5 metres.",
      "2.8 metres.",
      "3.0 metres."
    ],
    "answer": 1
  },
  {
    "id": "q81",
    "question": "LG056 - Should a truck driver (GVM >4.5 tonnes) always move into a lane marked with this sign?",
    "options": [
      "Yes, until a sign indicates the end of the lane.",
      "No, only when traffic is too heavy.",
      "No, only when the road descends steeply."
    ],
    "answer": 1,
    "image": "./images/output-021.png"
  },
  {
    "id": "q82",
    "question": "LG057 - Work time in your heavy vehicle work diary includes \u2013",
    "options": [
      "Any time spent on tasks related to operating a regulated heavy vehicle.",
      "Driving time only.",
      "Driving, cleaning, and refuelling only."
    ],
    "answer": 1
  },
  {
    "id": "q83",
    "question": "LG058 - Can you borrow someone else\u2019s work diary to record your work and rest hours?",
    "options": [
      "No, it is your personal record.",
      "Yes \u2013 it belongs to the regulated heavy vehicle.",
      "Yes, but only in a two-up arrangement."
    ],
    "answer": 1
  },
  {
    "id": "q84",
    "question": "LG059 - In your heavy vehicle work diary, the driver base is \u2013",
    "options": [
      "The place where you normally work.",
      "Your home address.",
      "The nearest RTA motor registry."
    ],
    "answer": 1
  },
  {
    "id": "q85",
    "question": "LG060 - Fatigue law applies to drivers of heavy vehicles or truck and trailer combinations \u2013",
    "options": [
      "Over 12 tonnes or a bus that seats more than 12 adults.",
      "Over 4.5 tonnes or a bus that seats 5 (including the driver).",
      "Over 8 tonnes or a bus that seats 10 (including the driver)."
    ],
    "answer": 1
  },
  {
    "id": "q86",
    "question": "LG061 - What is a regulated heavy vehicle?",
    "options": [
      "All heavy vehicles with a GVM over 12 tonnes (or truck & trailer combinations) or a bus seating more than 12 adults.",
      "All heavy vehicles with Federal Interstate registration.",
      "All heavy vehicles over 4.5 tonnes."
    ],
    "answer": 1
  },
  {
    "id": "q87",
    "question": "LG062 - In your heavy vehicle work diary, what is rest time?",
    "options": [
      "Time that is not counted as work.",
      "Only when you are sleeping.",
      "Only when you are at home."
    ],
    "answer": 1
  },
  {
    "id": "q88",
    "question": "LG063 - In your heavy vehicle work diary, how do you count rest time?",
    "options": [
      "In blocks of 15 minutes.",
      "In blocks of 10 minutes.",
      "In hourly blocks."
    ],
    "answer": 1
  },
  {
    "id": "q89",
    "question": "LG064 - When should you sign, date and total your work and rest hours in your diary?",
    "options": [
      "Every day on the daily sheet.",
      "Once a week.",
      "Once a month."
    ],
    "answer": 1
  },
  {
    "id": "q089b",
    "question": "LG065 - This sign is displayed on the approach to a bridge or tunnel. You should -",
    "options": [
      "Only proceed if your loaded vehicle is less than the maximum legal height of 4.3 metres.",
      "Only proceed if your loaded vehicle is less than 4.4 metres wide.",
      "Only proceed if you think your loaded vehicle can pass through."
    ],
    "answer": 1,
    "image": "./images/output-048.jpg"
  },
  {
    "id": "q90",
    "question": "AD004 - To reduce the effect of alcohol before driving or riding you should \u2013",
    "options": [
      "Wait \u2013 the time depends on how much you have drunk.",
      "Drink black coffee.",
      "Have a glass of water."
    ],
    "answer": 1
  },
  {
    "id": "q91",
    "question": "AD009 - Before driving a motor vehicle or riding a motor cycle it is safest to \u2013",
    "options": [
      "Not drink any alcohol.",
      "Drink 1 nip of spirits (30 ml).",
      "Drink 1 middy (285 ml) of light beer."
    ],
    "answer": 1
  },
  {
    "id": "q92",
    "question": "AD012 - Is it an offence to refuse to take a POLICE breath test?",
    "options": [
      "Yes, always.",
      "No \u2013 if you say you haven't been drinking.",
      "No \u2013 if you are a learner driver."
    ],
    "answer": 1
  },
  {
    "id": "q93",
    "question": "AD013 - If you take medicine and then drink alcohol \u2013",
    "options": [
      "It can have a particularly bad effect on your driving ability.",
      "The alcohol will have less effect than if taken alone.",
      "Your ability to react to emergencies will improve."
    ],
    "answer": 1
  },
  {
    "id": "q94",
    "question": "AD014 - For drivers of buses, taxis, hire-cars, heavy vehicles (over 13.9 tonnes GVM) or vehicles with dangerous loads, an offence is committed when the blood alcohol level reaches \u2013",
    "options": [
      "0.02.",
      "0.05.",
      "0.08."
    ],
    "answer": 1
  },
  {
    "id": "q95",
    "question": "AD015 - Having 1 or 2 alcoholic drinks before driving \u2013",
    "options": [
      "Will affect your reactions and judgement.",
      "Improves your driving ability.",
      "Has no effect on your driving ability."
    ],
    "answer": 1
  },
  {
    "id": "q96",
    "question": "AD016 - Even if you feel unaffected after drinking alcohol, you should \u2013",
    "options": [
      "Be aware that your abilities are decreased.",
      "Drive, but avoid freeways.",
      "Spend more time than usual looking in the mirrors."
    ],
    "answer": 1
  },
  {
    "id": "q97",
    "question": "AD020 - You are driving a commercial bus or heavy truck (GVM >13.9 tonnes) and are offered an alcoholic drink at lunch. You refuse because your BAC must be \u2013",
    "options": [
      "Under 0.02.",
      "Under 0.05.",
      "Zero."
    ],
    "answer": 1
  },
  {
    "id": "q98",
    "question": "AD021 - Drivers of public passenger vehicles must have a BAC below what level?",
    "options": [
      "0.02.",
      "Zero.",
      "0.05."
    ],
    "answer": 1,
    "image": "./images/output-052.png"
  },
  {
    "id": "q99",
    "question": "AD024 - If you are driving a vehicle carrying a dangerous load and are offered an alcoholic drink at lunch, you must have a BAC of \u2013",
    "options": [
      "Below 0.02.",
      "Below 0.05.",
      "Zero."
    ],
    "answer": 1
  },
  {
    "id": "q100",
    "question": "AD025 - Alcohol is a depressant. This means \u2013",
    "options": [
      "It slows down how quickly your brain works.",
      "It speeds up your brain.",
      "It makes you calm down and think more clearly."
    ],
    "answer": 1
  },
  {
    "id": "q100",
    "question": "AD025 - Alcohol is a depressant. This means –",
    "options": [
      "It slows down how quickly your brain works.",
      "It speeds up your brain.",
      "It makes you calm down and think more clearly."
    ],
    "answer": 1
  },
  {
    "id": "q101",
    "question": "AD026 - After drinking alcohol you could –",
    "options": [
      "Misjudge speed (your own and others).",
      "Drive as you normally can.",
      "Pay close attention to details."
    ],
    "answer": 1
  },
  {
    "id": "q102",
    "question": "AD033 - When drivers have been drinking, the crashes they are involved in are generally –",
    "options": [
      "More serious.",
      "Less serious.",
      "About the same."
    ],
    "answer": 1
  },
  {
    "id": "q103",
    "question": "AD038 - What is the safest way to stay under the legal alcohol limit?",
    "options": [
      "Not drink any alcohol.",
      "Buy a breathalyser.",
      "Exercise and drink black coffee."
    ],
    "answer": 1
  },
  {
    "id": "q104",
    "question": "DR001 - If you are taking any medicine, you should –",
    "options": [
      "Ask your doctor or chemist if it will affect your driving.",
      "Only drive during the day.",
      "Only drive a car, not a heavy vehicle."
    ],
    "answer": 1
  },
  {
    "id": "q105",
    "question": "DR002 - Before taking any drugs and then driving, it is most important to –",
    "options": [
      "Know what the effects are.",
      "Plan to have someone with you.",
      "Have some food in your stomach."
    ],
    "answer": 1
  },
  {
    "id": "q106",
    "question": "DR004 - If you have used illegal drugs you –",
    "options": [
      "Must not drive.",
      "May drive only in light traffic.",
      "Should drink coffee before driving."
    ],
    "answer": 1
  },
  {
    "id": "q107",
    "question": "DR005 - You are not sure if a new medicine will affect your driving. What should you do?",
    "options": [
      "Ask your doctor or pharmacist.",
      "Only drive with a passenger.",
      "Do not drive at night."
    ],
    "answer": 1
  },
  {
    "id": "q108",
    "question": "DR006 - Do cold/flu pills, codeine, and sedatives potentially affect your ability to drive safely?",
    "options": [
      "Yes.",
      "Yes, but only if combined with alcohol.",
      "No."
    ],
    "answer": 1
  },
  {
    "id": "q109",
    "question": "DR007 - What is a drug?",
    "options": [
      "Any chemical substance that alters how your brain or body works.",
      "Only prescribed medicines.",
      "Only illegal substances."
    ],
    "answer": 1
  },
  {
    "id": "q110",
    "question": "DR008 - A heavy vehicle driver has taken medication for a head cold. Could it affect driving?",
    "options": [
      "Yes.",
      "No.",
      "Only if combined with alcohol."
    ],
    "answer": 1
  },
  {
    "id": "q111",
    "question": "DR009 - If you are affected by a legal drug (e.g. cold or allergy tablets) –",
    "options": [
      "You must not drive.",
      "You must have a passenger to help you.",
      "You may drive only in daylight."
    ],
    "answer": 1
  },
  {
    "id": "q112",
    "question": "DR011 - If taking several medications and you want to drive, you should –",
    "options": [
      "Ask your doctor if the combination is dangerous.",
      "Drive around your local area to test effects.",
      "Ask your passengers to tell you if you are impaired."
    ],
    "answer": 1
  },
  {
    "id": "q113",
    "question": "BI001 - On a road with a 60 km/h speed limit or less, how much space must you leave when passing a bicycle rider?",
    "options": [
      "At least 1 metre.",
      "At least 1.5 metres.",
      "As much as you think is safe."
    ],
    "answer": 1
  },
  {
    "id": "q114",
    "question": "BI002 - On a road with a speed limit above 60 km/h, how much space must you leave when passing a bicycle rider?",
    "options": [
      "At least 1 metre.",
      "At least 1.5 metres.",
      "As much as you think is safe."
    ],
    "answer": 1
  },
  {
    "id": "q115",
    "question": "BI003 - To provide the minimum safe passing distance for bicycle riders, are you permitted to cross continuous lines?",
    "options": [
      "No.",
      "Yes, always.",
      "Yes, if you have a clear view of approaching traffic and it is safe."
    ],
    "answer": 1
  },
  {
    "id": "q116",
    "question": "FD001 - Under good conditions when driving behind another vehicle, you should –",
    "options": [
      "Stay at least three seconds behind.",
      "Drive as close as possible.",
      "Stay one second behind."
    ],
    "answer": 1
  },
  {
    "id": "q117",
    "question": "FD002 - When driving in wet weather, your vehicle will –",
    "options": [
      "Take longer and further to stop; slow down.",
      "Stop in the same distance as on dry roads.",
      "Handle better, so you can go faster."
    ],
    "answer": 1
  },
  {
    "id": "q118",
    "question": "FD003 - At night, if an oncoming vehicle's headlights dazzle you, you should –",
    "options": [
      "Slow down until your eyes recover.",
      "Watch the centre line.",
      "Close your eyes briefly."
    ],
    "answer": 1
  },
  {
    "id": "q119",
    "question": "FD004 - If you get sleepy while driving, it is best to –",
    "options": [
      "Stop, rest, and change drivers if possible.",
      "Turn the radio very loud.",
      "Turn on the air conditioning or open a window."
    ],
    "answer": 1
  },
  {
    "id": "q120",
    "question": "FD005 - In wet weather when visibility is reduced, you should –",
    "options": [
      "Turn on your headlights, slow down, and double your following distance.",
      "Use high beam headlights.",
      "Flash your headlights."
    ],
    "answer": 1
  },
  {
    "id": "q121",
    "question": "FD006 - If it starts to rain while driving, you should –",
    "options": [
      "Slow down and brake gently.",
      "Switch on high beam lights.",
      "Turn on hazard lights and speed up."
    ],
    "answer": 1
  },
  {
    "id": "q122",
    "question": "FD007 - On a slippery wet road (e.g. with morning dew), your vehicle will –",
    "options": [
      "Take longer and further to stop.",
      "Be heavier to steer.",
      "Be easier to steer."
    ],
    "answer": 1
  },
  {
    "id": "q123",
    "question": "FD010 - Why should you avoid heavy braking on a wet road?",
    "options": [
      "Your wheels may skid.",
      "Your handbrake might not work if locked up.",
      "You might wet pedestrians."
    ],
    "answer": 1
  },
  {
    "id": "q124",
    "question": "FD011 - At night you should –",
    "options": [
      "Leave a longer gap behind the vehicle in front.",
      "Use your hazard lights when overtaking.",
      "Drive closer so others can see you."
    ],
    "answer": 1
  },
  {
    "id": "q125",
    "question": "FD012 - In very foggy conditions without fog lights, you should –",
    "options": [
      "Slow down and use low beam headlights plus hazard lights.",
      "Switch on high beams.",
      "Follow closer to other vehicles."
    ],
    "answer": 1
  },
  {
    "id": "q126",
    "question": "FD013 - When going on a long trip, the most important thing to do is –",
    "options": [
      "Get plenty of rest before starting.",
      "Ensure your horn is working.",
      "Have a good meal."
    ],
    "answer": 1
  },
  {
    "id": "q127",
    "question": "FD014 - At night, when approaching an oncoming vehicle, you should –",
    "options": [
      "Avoid looking directly at its headlights; keep left.",
      "Stare directly at the headlights.",
      "Switch to high beam to be seen."
    ],
    "answer": 1
  },
  {
    "id": "q128",
    "question": "FD023 - Driver fatigue can be prevented by –",
    "options": [
      "Taking a break every few hours.",
      "Opening the cabin vents fully.",
      "Drinking a litre of strong coffee every two hours."
    ],
    "answer": 1
  },
  {
    "id": "q129",
    "question": "FD024 - Most fatigue-related crashes occur between what hours?",
    "options": [
      "11pm and 8am.",
      "9am and 9pm.",
      "8pm and midnight."
    ],
    "answer": 1
  },
  {
    "id": "q130",
    "question": "FD025 - The only effective way to deal with driver fatigue is to –",
    "options": [
      "Be well rested and take regular breaks.",
      "Drink plenty of strong black coffee.",
      "Listen to the radio and open the windows."
    ],
    "answer": 1
  },
  {
    "id": "q131",
    "question": "FD032 - What does scanning while driving involve?",
    "options": [
      "Continually looking ahead, to the sides, and using all mirrors.",
      "Just watching the rear and side mirrors.",
      "Looking far ahead only."
    ],
    "answer": 1
  },
  {
    "id": "q132",
    "question": "FD037 - In good conditions, what is the recommended gap between your vehicle and the one ahead?",
    "options": [
      "3 seconds.",
      "1 second.",
      "2 seconds."
    ],
    "answer": 1,
    "image": "./images/output-049.png"
  },
  {
    "id": "q133",
    "question": "FD041 - If you encounter aggressive or erratic driving, you should –",
    "options": [
      "Stay calm and keep control.",
      "Respond with horn and flashing lights.",
      "Chase the offending vehicle."
    ],
    "answer": 1
  },
  {
    "id": "q134",
    "question": "FD042 - Besides work and rest hours, what else must be recorded in your work diary?",
    "options": [
      "Your location and odometer reading at each change.",
      "Your average speed.",
      "Total weekly distance traveled."
    ],
    "answer": 1
  },
  {
    "id": "q135",
    "question": "FD043 - Under Standard Hours with a vehicle GVM >12 tonnes, what is the minimum rest time in an 8‑hour period?",
    "options": [
      "30 minutes (in 15‑minute blocks).",
      "60 minutes (in 15‑minute blocks).",
      "15 continuous minutes."
    ],
    "answer": 1
  },
  {
    "id": "q136",
    "question": "FD044 - For a solo driver under Standard Hours driving a vehicle GVM >12 tonnes, the maximum driving hours in any 7-day period is –",
    "options": [
      "72 hours.",
      "60 hours.",
      "80 hours."
    ],
    "answer": 1
  },
  {
    "id": "q137",
    "question": "FD045 - How many days of work diary driving records must be kept in your vehicle?",
    "options": [
      "28 days.",
      "14 days.",
      "7 days."
    ],
    "answer": 1
  },
  {
    "id": "q138",
    "question": "FD046 - Under Basic Fatigue Management for a solo driver with a vehicle GVM >12 tonnes in a 9‑hour period, the minimum rest time is –",
    "options": [
      "30 minutes (in 15‑minute blocks).",
      "60 minutes (in 15‑minute blocks).",
      "15 continuous minutes."
    ],
    "answer": 1
  },
  {
    "id": "q139",
    "question": "FD047 - Under Standard Fatigue Management Hours, what is the maximum number of work hours in any 24‑hour period?",
    "options": [
      "12 hours.",
      "14 hours.",
      "7 hours."
    ],
    "answer": 1
  },
  {
    "id": "q140",
    "question": "FD048 - In a two‑up arrangement under Standard Fatigue Management Hours, the maximum work hours in any 24‑hour period is –",
    "options": [
      "12 hours.",
      "14 hours.",
      "13 hours."
    ],
    "answer": 1
  },
  {
    "id": "q141",
    "question": "FD049 - In a two‑up arrangement under Standard Fatigue Management Hours, the maximum work hours in any 7‑day period is –",
    "options": [
      "60 hours.",
      "72 hours.",
      "36 hours."
    ],
    "answer": 1
  },
  {
    "id": "q142",
    "question": "IN001 - As you approach an intersection, you should check for traffic on your left and right –",
    "options": [
      "At all times before entering.",
      "Only when traffic is heavy.",
      "Only when approaching a stop sign."
    ],
    "answer": 1
  },
  {
    "id": "q143",
    "question": "IN003 - When making a right-hand turn at an intersection, you must give way to –",
    "options": [
      "An oncoming vehicle going straight or turning left and any vehicle on your right.",
      "A vehicle from your left turning right.",
      "Only pedestrians."
    ],
    "answer": 1,
    "image": "./images/output-050.png"
  },
  {
    "id": "q144",
    "question": "IN004 - If turning right at a T‑intersection, must you give way to vehicles from both left and right?",
    "options": [
      "Yes, whether they are turning or not.",
      "No, only to the vehicle on the right.",
      "No – you have the right of way."
    ],
    "answer": 1,
    "image": "./images/output-051.png"
  },
  {
    "id": "q145",
    "question": "IN005 - If a STOP or GIVE WAY sign has been knocked down (e.g. after an accident), does the line across the road have meaning?",
    "options": [
      "Yes, it has the same meaning as the sign.",
      "No, but you must give way when turning.",
      "No, only give way to the vehicle on your right."
    ],
    "answer": 1
  },
  {
    "id": "q146",
    "question": "IN006 - When turning at an intersection, are you required to give way to pedestrians?",
    "options": [
      "Yes – if there is any danger of collision.",
      "Yes, only when turning left.",
      "Yes, only when turning right."
    ],
    "answer": 1,
    "image": "./images/output-052.png"
  },
  {
    "id": "q147",
    "question": "IN007 - Approaching an intersection where the road beyond is choked with vehicles, you should –",
    "options": [
      "Wait until there is room to completely cross.",
      "Proceed if no traffic is on your right.",
      "Enter the intersection and wait for traffic to move."
    ],
    "answer": 1,
    "image": "./images/output-053.png"
  },
  {
    "id": "q148",
    "question": "IN008 - Right-turns must be made from which lane on a laned roadway?",
    "options": [
      "The far right-hand lane or any lane with a right-turn arrow.",
      "The lane carrying the least traffic.",
      "The far left-hand lane."
    ],
    "answer": 1
  },
  {
    "id": "q149",
    "question": "IN010 - In the diagram, both vehicles O and P must pass through GIVE WAY signs. Which goes first?",
    "options": [
      "Vehicle P.",
      "Vehicle O.",
      "It depends on who moves first."
    ],
    "answer": 1,
    "image": "./images/output-054.png"
  },
  {
    "id": "q150",
    "question": "IN011 - Vehicle O is at a STOP sign –",
    "options": [
      "It must give way to vehicles P, Q, and R.",
      "It must give way only to vehicle R.",
      "All vehicles must give way to vehicle O."
    ],
    "answer": 1,
    "image": "./images/output-055.png"
  },
  {
    "id": "q151",
    "question": "IN012 - If both vehicles P and O are turning right, which is best positioned to turn left into the street marked 'X'?",
    "options": [
      "Vehicle O.",
      "Vehicle P.",
      "Neither vehicle."
    ],
    "answer": 1,
    "image": "./images/output-056.png"
  },
  {
    "id": "q152",
    "question": "IN013 - At a pedestrian crossing with a STOP sign, if you have already stopped for a pedestrian, must you stop again at the STOP line?",
    "options": [
      "Yes, always.",
      "Yes, if there is traffic on your right only.",
      "No, if the intersection is clear."
    ],
    "answer": 1,
    "image": "./images/output-057.jpg"
  },
  {
    "id": "q153",
    "question": "IN014 - A GIVE WAY sign at an intersection means that you must –",
    "options": [
      "Be ready to stop and give way to all traffic if necessary.",
      "Stop completely at all times.",
      "Slow down and only give way to traffic on your right."
    ],
    "answer": 1,
    "image": "./images/output-058.png"
  },
  {
    "id": "q154",
    "question": "IN016 - Which vehicle in the diagram must give way?",
    "options": [
      "Vehicle J.",
      "Vehicle K.",
      "Vehicle L."
    ],
    "answer": 1,
    "image": "./images/output-059.png"
  },
  {
    "id": "q155",
    "question": "IN018 - You want to make a left turn. You must use your left-hand indicator –",
    "options": [
      "At all times.",
      "Only when there is traffic behind you.",
      "Only when arrows are marked on the road."
    ],
    "answer": 1
  },
  {
    "id": "q156",
    "question": "IN019 - At the T‑intersection shown, which vehicle should give way?",
    "options": [
      "Vehicle R.",
      "Vehicle Q.",
      "Whichever arrived last."
    ],
    "answer": 1,
    "image": "./images/output-060.png"
  },
  {
    "id": "q157",
    "question": "IN026 - Approaching a railway level crossing displaying a STOP sign, you should –",
    "options": [
      "Stop at all times and proceed when safe.",
      "Slow down to 10 km/h then proceed.",
      "Stop only if a train is present."
    ],
    "answer": 1,
    "image": "./images/output-061.png"
  },
  {
    "id": "q158",
    "question": "IN027 - In the diagram, you must stop –",
    "options": [
      "Even when there is no other traffic.",
      "Only if there is a car on your right or left.",
      "Only if there is danger of collision."
    ],
    "answer": 1,
    "image": "./images/output-062.png"
  },
  {
    "id": "q159",
    "question": "IN028 - With boomgates down and flashing signals at a railway crossing, you may begin to cross –",
    "options": [
      "Only when the gate is up and the lights stop flashing.",
      "If you cannot see a train approaching.",
      "If you can safely go around the closed gate."
    ],
    "answer": 1
  },
  {
    "id": "q160",
    "question": "IN029 - Approaching a railway crossing with the displayed sign, you must –",
    "options": [
      "Slow down, look both ways, and be prepared to stop.",
      "Increase your speed to avoid a train.",
      "Continue at normal speed."
    ],
    "answer": 1,
    "image": "./images/output-063.png"
  },
  {
    "id": "q161",
    "question": "IN030 - Even if the signal at a railway crossing does not show a train, you should –",
    "options": [
      "Slow down, be ready to stop, and give way if necessary.",
      "Speed up and cross quickly.",
      "Stop completely at all times."
    ],
    "answer": 1,
    "image": "./images/output-064.png"
  },
  {
    "id": "q162",
    "question": "IN031 - Approaching the intersection shown, you should –",
    "options": [
      "Drive carefully at a safe speed.",
      "Come to a complete stop.",
      "Flash your lights."
    ],
    "answer": 1,
    "image": "./images/output-065.png"
  },
  {
    "id": "q163",
    "question": "IN034 - At an intersection in Sydney with an approaching Light Rail vehicle, you should –",
    "options": [
      "Wait until the intersection is clear.",
      "Enter the intersection and keep clear of the Light Rail.",
      "Change lanes before crossing."
    ],
    "answer": 1,
    "image": "./images/output-066.png"
  },
  {
    "id": "q164",
    "question": "IN035 - In busy traffic when the lights turn green, you may enter the intersection –",
    "options": [
      "Only when there is room on the other side.",
      "Immediately after green.",
      "When signalled by the vehicle behind you."
    ],
    "answer": 1,
    "image": "./images/output-067.png"
  },
  {
    "id": "q165",
    "question": "IN039 - Which statement is correct about red light cameras?",
    "options": [
      "They photograph vehicles that enter intersections on red.",
      "They photograph vehicles that speed through intersections.",
      "They photograph vehicles that cross on yellow."
    ],
    "answer": 1,
    "image": "./images/output-063.png"
  },
  {
    "id": "q166",
    "question": "IN040 - As you drive into an intersection and the lights turn yellow, you should –",
    "options": [
      "Continue through.",
      "Accelerate hard.",
      "Brake immediately to a stop."
    ],
    "answer": 1,
    "image": "./images/output-068.png"
  },
  {
    "id": "q167",
    "question": "LD001 - How should you merge with traffic when entering a freeway?",
    "options": [
      "Watch for a gap and merge at traffic speed.",
      "Speed up and force your way in.",
      "Stop then enter quickly."
    ],
    "answer": 1
  },
  {
    "id": "q168",
    "question": "LD002 - Which movements can the driver of the purple car legally make (diagram)?",
    "options": [
      "O and P only.",
      "P only.",
      "O, P and Q."
    ],
    "answer": 1,
    "image": "./images/output-071.png"
  },
  {
    "id": "q169",
    "question": "LD003 - Which movements can the purple car legally make (diagram)?",
    "options": [
      "O, P and Q.",
      "O and P only.",
      "P only."
    ],
    "answer": 1,
    "image": "./images/output-072.png"
  },
  {
    "id": "q170",
    "question": "LD004 - Which movements can the purple car legally make (diagram)?",
    "options": [
      "O and P only.",
      "P only.",
      "O, P and Q."
    ],
    "answer": 1,
    "image": "./images/output-073.png"
  },
  {
    "id": "q171",
    "question": "LD007 - With double unbroken dividing lines, you may –",
    "options": [
      "Cross them to enter a driveway if safe.",
      "Cross them to overtake if safe.",
      "Cross them to make a U-turn."
    ],
    "answer": 1,
    "image": "./images/output-074.png"
  },
  {
    "id": "q172",
    "question": "LD009 - When driving in traffic lanes, you may change lanes –",
    "options": [
      "Only when it is safe.",
      "Without looking if you signal.",
      "By sounding your horn."
    ],
    "answer": 1,
    "image": "./images/output-075.jpg"
  },
  {
    "id": "q173",
    "question": "LD010 - When two lanes merge into one, who should give way?",
    "options": [
      "The vehicle that must cross the lane line.",
      "The faster vehicle.",
      "The vehicle in the right-hand lane."
    ],
    "answer": 1
  },
  {
    "id": "q174",
    "question": "LD011 - In the diagram, which vehicle must give way?",
    "options": [
      "Vehicle B.",
      "Vehicle A.",
      "Either vehicle (no rule exists)."
    ],
    "answer": 1,
    "image": "./images/output-076.png"
  },
  {
    "id": "q175",
    "question": "LD013 - When must you use your indicator lights?",
    "options": [
      "When changing lanes or turning.",
      "When approaching a curve.",
      "When double parking."
    ],
    "answer": 1
  },
  {
    "id": "q176",
    "question": "LD014 - If you hear an emergency vehicle’s siren, you must –",
    "options": [
      "Take all necessary action (safely) to make way.",
      "Flash your headlights.",
      "Increase your speed."
    ],
    "answer": 1
  },
  {
    "id": "q177",
    "question": "LD017 - When the road is marked as shown, are you permitted to cross the lines and overtake?",
    "options": [
      "No.",
      "Yes.",
      "Yes, only if the way ahead is clear."
    ],
    "answer": 1,
    "image": "./images/output-078.png"
  },
  {
    "id": "q178",
    "question": "LD041 - On a multi-lane road with a speed limit >80 km/h, which lane should you choose?",
    "options": [
      "The left lane unless overtaking.",
      "The right lane to avoid slow vehicles.",
      "Either lane."
    ],
    "answer": 1
  },
  {
    "id": "q179",
    "question": "LD043 - Signalling is –",
    "options": [
      "Always required before turning or changing lanes.",
      "Not required when turning at T‑intersections.",
      "Not required when turning at green arrow traffic lights."
    ],
    "answer": 1
  },
  {
    "id": "q180",
    "question": "LD044 - How should you merge onto a motorway?",
    "options": [
      "Watch for a gap and accelerate to merge safely.",
      "Slow down and force your way in.",
      "Stop then enter quickly."
    ],
    "answer": 1
  },
  {
    "id": "q181",
    "question": "LR001 - What is the maximum allowable distance a load may project from the side (if overall width ≤2.5 m)?",
    "options": [
      "150mm.",
      "200mm.",
      "250mm."
    ],
    "answer": 1,
    "image": "./images/output-085.jpg"
  },
  {
    "id": "q182",
    "question": "LR002 - What is the maximum length a load may project in front of a vehicle?",
    "options": [
      "1.2 metres.",
      "0.8 metres.",
      "2.0 metres."
    ],
    "answer": 1
  },
  {
    "id": "q183",
    "question": "LR003 - The most important part of blocking when securing a load is –",
    "options": [
      "The headboard or bulkhead.",
      "The chocks.",
      "The outriggers."
    ],
    "answer": 1
  },
  {
    "id": "q184",
    "question": "LR004 - In which diagram is the load NOT blocked?",
    "options": [
      "Truck 2.",
      "Truck 3.",
      "Truck 1."
    ],
    "answer": 1,
    "image": "./images/output-384.png"
  },
  {
    "id": "q185",
    "question": "LR005 - To avoid loss of steering and traction, you should –",
    "options": [
      "Spread the load close to the centre line.",
      "Load heavy items to one side.",
      "Stack lighter items at the bottom."
    ],
    "answer": 1
  },
  {
    "id": "q186",
    "question": "LR006 - For a rigid truck with a single rear axle and 4 tyres, the maximum statutory axle load is –",
    "options": [
      "9.0 tonnes.",
      "13.0 tonnes.",
      "16.5 tonnes."
    ],
    "answer": 1,
    "image": "./images/output-089.jpg"
  },
  {
    "id": "q187",
    "question": "LR009 - A braking truck: In which direction will the unrestrained load on the tray move?",
    "options": [
      "Forwards.",
      "Backwards.",
      "Sideways."
    ],
    "answer": 1,
    "image": "./images/output-090.jpg"
  },
  {
    "id": "q188",
    "question": "LR010 - The load resting against the headboard is restrained by –",
    "options": [
      "Blocking.",
      "Attaching.",
      "Containing."
    ],
    "answer": 1,
    "image": "./images/output-091.png"
  },
  {
    "id": "q189",
    "question": "LR011 - A load restraint system should restrain what percentage of the load’s weight from shifting forwards/upwards?",
    "options": [
      "80%",
      "50%",
      "20%"
    ],
    "answer": 1,
    "image": "./images/output-385.png"
  },
  {
    "id": "q190",
    "question": "LR012 - A load restraint system should restrain what percentage of the load’s weight from shifting sideways/rearwards?",
    "options": [
      "20%",
      "50%",
      "80%"
    ],
    "answer": 1,
    "image": "./images/output-386.png"
  },
  {
    "id": "q191",
    "question": "LR013 - Which ‘tie down angle’ is not recommended for lashings?",
    "options": [
      "Truck 1",
      "Truck 2",
      "Truck 3"
    ],
    "answer": 1,
    "image": "./images/output-387.png"
  },
  {
    "id": "q192",
    "question": "LR014 - Which loads are more likely to cause a vehicle to overturn on corners?",
    "options": [
      "High centre of mass and 'live' loads (e.g. bulk liquids, livestock).",
      "Blocked loads.",
      "Heavy loads."
    ],
    "answer": 1
  },
  {
    "id": "q193",
    "question": "LR015 - When loading cardboard cartons, where should the heaviest items be placed?",
    "options": [
      "At the bottom.",
      "At the top.",
      "In the middle."
    ],
    "answer": 1
  },
  {
    "id": "q194",
    "question": "LR016 - Loaded with logs: Which vehicles have correctly secured loads?",
    "options": [
      "Vehicles 1 and 3.",
      "Vehicles 1 and 2.",
      "Vehicle 3 only."
    ],
    "answer": 1,
    "image": "./images/output-388.png"
  },
  {
    "id": "q195",
    "question": "LR018 - For vehicles with a GVM over 4.5 tonnes (excluding cranes), the total width including load must not exceed –",
    "options": [
      "2.5 metres",
      "3.2 metres",
      "1.2 metres"
    ],
    "answer": 1,
    "image": "./images/output-389.png"
  },
  {
    "id": "q196",
    "question": "LR020 - Sheets and tarpaulins can hold down bulk loads only if the load is –",
    "options": [
      "Very light.",
      "Very wet.",
      "Very heavy."
    ],
    "answer": 1,
    "image": "./images/output-141.png"
  },
  {
    "id": "q197",
    "question": "LR021 - Which diagram shows the correct loading position to prevent chassis twisting?",
    "options": [
      "Diagram 2",
      "Diagram 3",
      "Diagram 1"
    ],
    "answer": 1,
    "image": "./images/output-390.png"
  },
  {
    "id": "q198",
    "question": "LR022 - Which diagram shows the correct method for restraining a loose load?",
    "options": [
      "Diagram 3",
      "Diagram 2",
      "Diagram 1"
    ],
    "answer": 1,
    "image": "./images/output-391.png"
  },
  {
    "id": "q199",
    "question": "LR023 - Which diagram shows the correct load position to ensure weight on the steer axles?",
    "options": [
      "Diagram 2",
      "Diagram 3",
      "Diagram 1"
    ],
    "answer": 1,
    "image": "./images/output-392.png"
  },
  {
    "id": "q200",
    "question": "LR024 - Which diagram shows the correct dunnage position for long rigid loads (e.g. steel pipes)?",
    "options": [
      "Diagram 2",
      "Diagram 3",
      "Diagram 1"
    ],
    "answer": 1,
    "image": "./images/output-393.png"
  },
  {
    "id": "q201",
    "question": "LR025 - Which method best directly restrains a contained load?",
    "options": [
      "Diagram 1 – Tankers, tipper bodies.",
      "Diagram 2 – Headboards, side/tail gates.",
      "Diagram 3 – Direct lashings."
    ],
    "answer": 1,
    "image": "./images/output-394.png"
  },
  {
    "id": "q202",
    "question": "LR027 - Which diagram shows the correct method for restraining small pipe or log loads?",
    "options": [
      "Diagram 3",
      "Diagram 2",
      "Diagram 1"
    ],
    "answer": 1,
    "image": "./images/output-395.png"
  },
  {
    "id": "q203",
    "question": "LR028 - Which diagram shows the correct method for restraining large pipe loads?",
    "options": [
      "Diagram 1",
      "Diagram 2",
      "Diagram 3"
    ],
    "answer": 1,
    "image": "./images/output-396.png"
  },
  {
    "id": "q204",
    "question": "LR029 - Which diagram shows the correct method for restraining divided loads?",
    "options": [
      "Diagram 3",
      "Diagram 2",
      "Diagram 1"
    ],
    "answer": 1,
    "image": "./images/output-397.png"
  },
  {
    "id": "q205",
    "question": "LR030 - Which diagram shows the correct position for carrying loads with dangerous projections?",
    "options": [
      "Diagram 2",
      "Diagram 3",
      "Diagram 1"
    ],
    "answer": 1,
    "image": "./images/output-398.png"
  },
  {
    "id": "q206",
    "question": "LR031 - Which diagram shows the best method for securing loads and protecting lashings?",
    "options": [
      "Diagram 3",
      "Diagram 2",
      "Diagram 1"
    ],
    "answer": 1,
    "image": "./images/output-399.png"
  },
  {
    "id": "q207",
    "question": "LR032 - Loaded shipping containers with corner twist locks should –",
    "options": [
      "Not be carried on trucks not fitted with twist locks.",
      "Be chained to a truck not fitted with twist locks.",
      "Only be carried on trucks if secured with webbing."
    ],
    "answer": 1,
    "image": "./images/output-400.png"
  },
  {
    "id": "q208",
    "question": "ND002 - When driving near parked vehicles, you should –",
    "options": [
      "Check for vehicles with blinking indicators or children about to step out.",
      "Stop if you see a car with its right-hand indicator on.",
      "Sound your horn and flash your headlights."
    ],
    "answer": 1
  },
  {
    "id": "q209",
    "question": "ND004 - Approaching a hill or curve, you must not cross the centre line to overtake –",
    "options": [
      "If you do not have a clear view of approaching traffic.",
      "If you cannot see 100 metres ahead.",
      "If you cannot see 75 metres ahead."
    ],
    "answer": 1
  },
  {
    "id": "q210",
    "question": "ND005 - Approaching the crest of a hill on a narrow road, the safest procedure is to –",
    "options": [
      "Keep to the left and slow down.",
      "Flash your headlights.",
      "Increase your speed and sound your horn."
    ],
    "answer": 1
  },
  {
    "id": "q211",
    "question": "ND007 - On a single-lane road, you must always overtake on the right except when –",
    "options": [
      "The other vehicle is turning right.",
      "You are travelling above 80 km/h.",
      "The other vehicle is going slower than you."
    ],
    "answer": 1,
    "image": "./images/output-290.png"
  },
  {
    "id": "q212",
    "question": "ND014 - Before beginning to overtake another vehicle, you should –",
    "options": [
      "Check that it is safe, change gear if necessary, and signal your intention.",
      "Signal and slow down to gain room.",
      "Sound your horn and overtake immediately."
    ],
    "answer": 1
  },
  {
    "id": "q213",
    "question": "ND015 - Driving behind a long vehicle with a 'DO NOT OVERTAKE TURNING VEHICLE' sign, if it indicates a left turn, you should –",
    "options": [
      "Let the long vehicle turn first.",
      "Move to the left and pass.",
      "Pass because it cannot turn from the middle lane."
    ],
    "answer": 1,
    "image": "./images/output-291.png"
  },
  {
    "id": "q214",
    "question": "ND019 - How should you overtake a pedal cyclist?",
    "options": [
      "In the same safe manner as a car.",
      "Drive very close so they move over.",
      "Sound your horn to make them get off the road."
    ],
    "answer": 1,
    "image": "./images/output-292.png"
  },
  {
    "id": "q215",
    "question": "ND020 - If an overtaking vehicle signals to move in front of you, you should –",
    "options": [
      "Prepare to slow down and allow room.",
      "Speed up to block it.",
      "Flash your lights."
    ],
    "answer": 1,
    "image": "./images/output-293.png"
  },
  {
    "id": "q216",
    "question": "ND021 - The first thing you should do before overtaking is –",
    "options": [
      "Ensure it is safe and that there is no oncoming traffic.",
      "Sound your horn.",
      "Increase your speed."
    ],
    "answer": 1
  },
  {
    "id": "q217",
    "question": "ND028 - If convicted of driving with a BAC over your licence’s limit, you could lose your licence and also –",
    "options": [
      "Be sent to prison.",
      "Be restricted to driving an automatic.",
      "Have a personal speed limit imposed on you."
    ],
    "answer": 1
  },
  {
    "id": "q218",
    "question": "ND030 - If convicted of dangerous driving –",
    "options": [
      "You could lose your licence and may be sent to prison.",
      "You could be fined and given demerit points only.",
      "You will only get demerit points."
    ],
    "answer": 1
  },
  {
    "id": "q219",
    "question": "ND031 - If you are in the left lane and move right to turn while another driver honks, you have –",
    "options": [
      "Crossed an unbroken lane line.",
      "Driven too slowly.",
      "Changed lanes unnecessarily."
    ],
    "answer": 1,
    "image": "./images/output-294.png"
  },
  {
    "id": "q220",
    "question": "ND032 - What is the negligent and illegal driving behavior in the diagram?",
    "options": [
      "Crossing an unbroken line at a curve.",
      "Not signalling when changing lanes.",
      "Overtaking on the kerb side."
    ],
    "answer": 1,
    "image": "./images/output-295.png"
  },
  {
    "id": "q221",
    "question": "ND034 - On a road with a 100 km/h speed limit, when can you use the right lane?",
    "options": [
      "Only when overtaking or turning right.",
      "Whenever you want.",
      "When no other traffic is around."
    ],
    "answer": 1,
    "image": "./images/output-296.png"
  },
  {
    "id": "q222",
    "question": "ND035 - If another vehicle is overtaking you on your right, you commit an offence if you –",
    "options": [
      "Speed up while they are on your right.",
      "Keep the same speed.",
      "Slow down."
    ],
    "answer": 1
  },
  {
    "id": "q223",
    "question": "ND044 - When overtaking a car and noticing its right indicator flashing, you should –",
    "options": [
      "Check your mirror and move back in behind it.",
      "Accelerate to get past.",
      "Brake immediately to a stop."
    ],
    "answer": 1,
    "image": "./images/output-297.png"
  },
  {
    "id": "q224",
    "question": "ND045 - If caught speeding in a road work zone, you will –",
    "options": [
      "Be fined and lose demerit points.",
      "Receive a warning letter.",
      "Not be penalized as the limit is advisory."
    ],
    "answer": 1
  },
  {
    "id": "q225",
    "question": "ND046 - When driving through temporary road work, you should –",
    "options": [
      "Slow down and look out for hazards.",
      "Maintain your current speed if clear.",
      "Sound your horn."
    ],
    "answer": 1
  },
  {
    "id": "q226",
    "question": "PD001 - You must give way to pedestrians on a marked crossing –",
    "options": [
      "If there is any danger of a collision.",
      "When they are crossing from your right only.",
      "When they are crossing from your left only."
    ],
    "answer": 1
  },
  {
    "id": "q227",
    "question": "PD002 - Approaching a marked pedestrian crossing with no pedestrians, you should –",
    "options": [
      "Slow down and be ready to stop.",
      "Come to a complete stop.",
      "Go faster in case someone appears."
    ],
    "answer": 1,
    "image": "./images/output-298.png"
  },
  {
    "id": "q228",
    "question": "PD003 - If elderly people or children are on a crossing, you will likely need to –",
    "options": [
      "Wait extra time to let them cross safely.",
      "Sound your horn to hurry them.",
      "Drive around them."
    ],
    "answer": 1
  },
  {
    "id": "q229",
    "question": "PD004 - Which sign painted on the road indicates a pedestrian crossing ahead?",
    "options": [
      "B",
      "A",
      "C"
    ],
    "answer": 1,
    "image": "./images/output-299.png"
  },
  {
    "id": "q230",
    "question": "PD005 - A vehicle ahead has stopped at a crossing. You should –",
    "options": [
      "Not overtake the stopped vehicle.",
      "Overtake if no pedestrians are visible.",
      "Overtake provided no cars are coming from the other side."
    ],
    "answer": 1,
    "image": "./images/output-300.png"
  },
  {
    "id": "q231",
    "question": "PD006 - If you see a School Crossing Supervisor holding a sign, you must wait until the children –",
    "options": [
      "Are off the crossing and the sign is removed.",
      "Reach the right-hand side.",
      "Are out of sight."
    ],
    "answer": 1,
    "image": "./images/output-301.png"
  },
  {
    "id": "q232",
    "question": "PD007 - Which statement is correct regarding bicycle riders?",
    "options": [
      "They must obey road rules.",
      "They may not travel on heavy traffic roads.",
      "They must ride against traffic to be seen."
    ],
    "answer": 1
  },
  {
    "id": "q233",
    "question": "PD009 - When driving near children playing or walking near the road’s edge, you should –",
    "options": [
      "Slow down and be ready to stop.",
      "Sound your horn.",
      "Continue at the same speed and drive around them."
    ],
    "answer": 1
  },
  {
    "id": "q234",
    "question": "PD010 - Pedestrians affected by alcohol are –",
    "options": [
      "One of the most common groups involved in accidents.",
      "Unlikely to be near the road.",
      "Less dangerous because they are more cautious."
    ],
    "answer": 1
  },
  {
    "id": "q235",
    "question": "PD011 - Near pedestrian crossings, intersections, or school crossings, you should always –",
    "options": [
      "Slow down, watch for pedestrians, and be ready to stop.",
      "Move into the left lane.",
      "Keep your eyes on the speedometer."
    ],
    "answer": 1
  },
  {
    "id": "q236",
    "question": "PD012 - In areas with many pedestrians (e.g. near a bus stop), it is important to –",
    "options": [
      "Slow down and watch for pedestrians indicating they will enter the road.",
      "Turn on high beams so they can see you.",
      "Increase your speed."
    ],
    "answer": 1
  },
  {
    "id": "q237",
    "question": "PD013 - When driving past parked vehicles, what is most important?",
    "options": [
      "Watch for pedestrians, animals, and opening car doors.",
      "Drive in the right-hand lane if available.",
      "Stay as close as possible to the vehicle ahead."
    ],
    "answer": 1
  },
  {
    "id": "q238",
    "question": "PD014 - In wet weather, you should –",
    "options": [
      "Watch out for pedestrians who may rush into the road.",
      "Drive in the middle of the road to avoid splashing.",
      "Stop to help elderly pedestrians cross."
    ],
    "answer": 1
  },
  {
    "id": "q239",
    "question": "PD015 - At a crossing with traffic lights, when the amber light flashes after red, it means –",
    "options": [
      "You may carefully drive through if safe.",
      "The lights are out of order.",
      "The green light is due; wait for it."
    ],
    "answer": 1,
    "image": "./images/output-302.png"
  },
  {
    "id": "q240",
    "question": "PD016 - Which statement is true?",
    "options": [
      "You must give way to pedestrians if there is any danger.",
      "Pedestrians have no special rights.",
      "You must only give way at marked crossings."
    ],
    "answer": 1,
    "image": "./images/output-303.png"
  },
  {
    "id": "q241",
    "question": "PD017 - Driving towards pedestrians on the road, you should –",
    "options": [
      "Stop and give way if there is any danger of hitting them.",
      "Sound your horn to warn them.",
      "Slow down until they are halfway across, then proceed."
    ],
    "answer": 1,
    "image": "./images/output-304.png"
  },
  {
    "id": "q242",
    "question": "PD018 - The zig-zag markings on the road mean –",
    "options": [
      "Take care and watch for pedestrians at a crossing.",
      "Watch out for animals.",
      "Be careful; the road is slippery."
    ],
    "answer": 1,
    "image": "./images/output-305.png"
  },
  {
    "id": "q243",
    "question": "PD019 - These road markings indicate –",
    "options": [
      "Places where pedestrians have special rights.",
      "Parking areas.",
      "Special speed limit zones."
    ],
    "answer": 1,
    "image": "./images/output-306.png"
  },
  {
    "id": "q244",
    "question": "PD021 - Approaching a person crossing the road, you should –",
    "options": [
      "Slow down or stop to avoid hitting them.",
      "Honk to hurry them.",
      "Maintain speed and swerve around."
    ],
    "answer": 1,
    "image": "./images/output-307.png"
  },
  {
    "id": "q245",
    "question": "PD022 - At a crossing with a supervisor (picture shown), you should –",
    "options": [
      "Slow down and stop until the supervisor removes the sign.",
      "Slow down and drive through, giving way to the children.",
      "Stop and wait until your lane is clear."
    ],
    "answer": 1,
    "image": "./images/output-308.png"
  },
  {
    "id": "q246",
    "question": "PD023 - At a crossing with traffic lights, when the lights change to red you should –",
    "options": [
      "Stop, wait for pedestrians to cross, and then wait for green.",
      "Slow down and give way.",
      "Stop and continue after pedestrians have crossed."
    ],
    "answer": 1
  },
  {
    "id": "q247",
    "question": "PD024 - A person standing on a pedestrian refuge who steps out into your lane, you should –",
    "options": [
      "Give way if there is any danger of collision.",
      "Slow down and honk to warn them.",
      "Maintain your speed."
    ],
    "answer": 1,
    "image": "./images/output-309.png"
  },
  {
    "id": "q248",
    "question": "PD025 - Which statement is correct?",
    "options": [
      "You must give way to pedestrians if there is any danger.",
      "Pedestrians must cross only at marked crossings.",
      "You don’t have to give way to adults at children’s crossings."
    ],
    "answer": 1,
    "image": "./images/output-310.png"
  },
  {
    "id": "q249",
    "question": "PD026 - When you see children on or near the road, you should –",
    "options": [
      "Slow down and be extra careful.",
      "Reduce your speed by 5 km/h.",
      "Ignore them and check your rearview mirror."
    ],
    "answer": 1,
    "image": "./images/output-311.png"
  },
  {
    "id": "q250",
    "question": "PD027 - When you see older people near the road, you should –",
    "options": [
      "Slow down and take extra care.",
      "Drive around them to keep traffic moving.",
      "Honk and keep your speed."
    ],
    "answer": 1,
    "image": "./images/output-312.png"
  },
  {
    "id": "q251",
    "question": "PD028 - In poor light, to give way to pedestrians at risk, you should –",
    "options": [
      "Look carefully because they are hard to see.",
      "Keep your headlights on high beam.",
      "Always drive in the right-hand lane."
    ],
    "answer": 1
  },
  {
    "id": "q252",
    "question": "PD030 - Approaching a Light Rail vehicle stopped at a tram stop, you should –",
    "options": [
      "Take extra care, slow down, and give way to pedestrians.",
      "Look out for oncoming traffic.",
      "Slow down but keep moving so as not to delay traffic."
    ],
    "answer": 1,
    "image": "./images/output-313.png"
  },
  {
    "id": "q253",
    "question": "SB007 - The most effective device for protecting passengers in an accident is –",
    "options": [
      "Seat belts.",
      "Safety door latches.",
      "Padded instrument panels."
    ],
    "answer": 1
  },
  {
    "id": "q254",
    "question": "SB008 - Which statement about seat belts is correct?",
    "options": [
      "They save lives and prevent injury.",
      "They do not have to be used in the rear seat.",
      "They are not necessary for good drivers."
    ],
    "answer": 1
  },
  {
    "id": "q255",
    "question": "SB011 - Seat belts and child restraints (e.g. baby capsules, child seats) –",
    "options": [
      "Must always be worn properly and adjusted tightly.",
      "Are only needed on long trips.",
      "Are only needed on short trips."
    ],
    "answer": 1
  },
  {
    "id": "q256",
    "question": "SB012 - Child restraints (e.g. baby capsules, child seats) –",
    "options": [
      "Should be fitted according to the manufacturer’s instructions.",
      "Are not as safe as holding a child in your arms.",
      "Need only be used if the child wants to sleep."
    ],
    "answer": 1
  },
  {
    "id": "q257",
    "question": "SL007 - Driving faster than the maximum speed limit is –",
    "options": [
      "Never legally permitted.",
      "Permitted only when passing.",
      "Only permitted when others are going faster."
    ],
    "answer": 1
  },
  {
    "id": "q258",
    "question": "SL008 - What is your maximum speed limit when driving a vehicle with a GVM over 4.5 tonnes?",
    "options": [
      "100 km/h.",
      "90 km/h.",
      "110 km/h."
    ],
    "answer": 1
  },
  {
    "id": "q259",
    "question": "SL011 - For a vehicle (not a road train) with a GVM >4.5 tonnes, the maximum speed permitted is –",
    "options": [
      "100 km/h.",
      "90 km/h.",
      "110 km/h."
    ],
    "answer": 1
  },
  {
    "id": "q260",
    "question": "SL012 - In an area with no speed limit signs and no street lights, the speed limit is –",
    "options": [
      "100 km/h.",
      "40 km/h.",
      "60 km/h."
    ],
    "answer": 1
  },
  {
    "id": "q261",
    "question": "SL014 - The diagram indicates that –",
    "options": [
      "Trucks and buses must travel at no more than 40 km/h.",
      "Trucks and buses may travel at 40 km/h.",
      "Trucks and buses must travel at no less than 40 km/h."
    ],
    "answer": 1,
    "image": "./images/output-314.png"
  },
  {
    "id": "q262",
    "question": "SL016 - A speed limiter fitted to a heavy vehicle (other than a road train) prevents it from exceeding –",
    "options": [
      "100 km/h.",
      "90 km/h.",
      "105 km/h."
    ],
    "answer": 1
  },
  {
    "id": "q263",
    "question": "SL017 - A 10‑tonne GVM commercial bus (coach) approaching the sign shown should –",
    "options": [
      "Not exceed 40 km/h.",
      "Drive faster than 40 km/h if safe.",
      "Ignore the sign (it applies only to vehicles >15 tonnes)."
    ],
    "answer": 1,
    "image": "./images/output-314.png"
  },
  {
    "id": "q264",
    "question": "SL019 - The sign shown in the diagram is –",
    "options": [
      "A regulatory sign for truck and bus drivers that must be obeyed.",
      "An advisory sign for truck and bus drivers.",
      "A regulatory sign for vehicles >30 tonnes GVM."
    ],
    "answer": 1,
    "image": "./images/output-314.png"
  },
  {
    "id": "q265",
    "question": "SL025 - Driving over the speed limit can result in –",
    "options": [
      "Fines, demerit points, and possibly loss of licence.",
      "Fines only.",
      "A warning letter and a small fine."
    ],
    "answer": 1
  },
  {
    "id": "q266",
    "question": "SL028 - Where there are no speed limit signs, the limit is 100 km/h unless –",
    "options": [
      "There are street lights along the road.",
      "The road is gravel.",
      "An emergency applies."
    ],
    "answer": 1
  },
  {
    "id": "q267",
    "question": "SL030 - When you see this sign, you must –",
    "options": [
      "Not exceed 40 km/h and be on the lookout for vulnerable road users.",
      "Only enter the street if you live in the area.",
      "Drive at less than 40 km/h if not a resident."
    ],
    "answer": 1,
    "image": "./images/output-317.jpg"
  },
  {
    "id": "q268",
    "question": "SL031 - This sign means you must –",
    "options": [
      "Share the road and not exceed 10 km/h.",
      "Drive at 10 km/h if pedestrians are present.",
      "Reduce your speed to what you think is safe but never below 10 km/h."
    ],
    "answer": 1,
    "image": "./images/output-318.jpg"
  },
  {
    "id": "q269",
    "question": "SL035 - On the highway, if you come across road works with a reduced speed zone, you must –",
    "options": [
      "Slow down to the new speed limit.",
      "Drive through as fast as possible.",
      "Drive at the same speed as other vehicles."
    ],
    "answer": 1
  },
  {
    "id": "q270",
    "question": "TL001 - Facing traffic lights as shown, what do they mean?",
    "options": [
      "Proceed only in the direction of the green arrow.",
      "Proceed only in the green arrow’s direction after red turns green.",
      "Give way to oncoming traffic."
    ],
    "answer": 1,
    "image": "./images/output-319.png"
  },
  {
    "id": "q271",
    "question": "TL002 - At traffic lights, when a red light appears, you must –",
    "options": [
      "Stop and wait behind the stop line until green.",
      "Stop and wait until yellow.",
      "Stop then drive if no traffic is present."
    ],
    "answer": 1,
    "image": "./images/output-320.png"
  },
  {
    "id": "q272",
    "question": "TL003 - Approaching traffic lights that change from green to yellow, you should –",
    "options": [
      "Stop at the stop line unless too close to stop safely.",
      "Speed up to clear the intersection.",
      "Stop only if a red light camera is active."
    ],
    "answer": 1,
    "image": "./images/output-321.png"
  },
  {
    "id": "q273",
    "question": "TL004 - At an intersection with traffic lights and the sign shown, you may –",
    "options": [
      "Stop at red then turn left if safe.",
      "Slow down and check for traffic before turning left.",
      "Turn left only if a green arrow is shown."
    ],
    "answer": 1,
    "image": "./images/output-322.png"
  },
  {
    "id": "q274",
    "question": "TL005 - Are you permitted to make a U-turn at traffic lights?",
    "options": [
      "No, unless a 'U-TURN PERMITTED' sign is present.",
      "Yes, at all times.",
      "Yes, if there is no danger."
    ],
    "answer": 1
  },
  {
    "id": "q275",
    "question": "TL006 - These lights mean that you –",
    "options": [
      "Can turn left but not go straight.",
      "Can turn left or go straight.",
      "Can only turn left if a 'TURN LEFT AT ANY TIME WITH CARE' sign is displayed."
    ],
    "answer": 1,
    "image": "./images/output-329.png"
  },
  {
    "id": "q276",
    "question": "TL007 - This light means you –",
    "options": [
      "Can go straight or turn left/right if safe.",
      "Must stop and wait for red.",
      "Can make a U-turn if safe."
    ],
    "answer": 1,
    "image": "./images/output-330.png"
  },
  {
    "id": "q277",
    "question": "TL008 - At 3 o’clock in the morning with no other traffic, if you want to turn right you may –",
    "options": [
      "Not turn right if the arrow is red.",
      "Turn right after waiting one minute.",
      "Turn right if it is safe."
    ],
    "answer": 1,
    "image": "./images/output-332.png"
  },
  {
    "id": "q278",
    "question": "TL010 - Approaching an intersection where the yellow turns red, you must –",
    "options": [
      "Stop and wait for the green light.",
      "Speed up to avoid oncoming traffic.",
      "Sound your horn and proceed."
    ],
    "answer": 1,
    "image": "./images/output-331.png"
  },
  {
    "id": "q279",
    "question": "TL011 - Approaching an intersection with a red light and the sign shown, if you wish to turn left you must –",
    "options": [
      "Stop and turn left only if safe.",
      "Stop and wait for green.",
      "Slow down then turn left/right if safe."
    ],
    "answer": 1,
    "image": "./images/output-333.png"
  },
  {
    "id": "q280",
    "question": "TL013 - Waiting at red lights that then turn green, you should –",
    "options": [
      "Check both sides before proceeding.",
      "Cross as quickly as possible.",
      "Wait for the traffic behind you to move."
    ],
    "answer": 1,
    "image": "./images/output-334.png"
  },
  {
    "id": "q281",
    "question": "TL014 - To turn right at an intersection with the displayed traffic light, you should –",
    "options": [
      "Stay behind the stop line until the green arrow shows.",
      "Move forward slowly.",
      "Enter the intersection and wait for the green arrow."
    ],
    "answer": 1,
    "image": "./images/output-335.jpg"
  },
  {
    "id": "q282",
    "question": "TL015 - At an intersection with red lights and the sign shown, if you wish to turn left you should –",
    "options": [
      "Stop, then turn left if safe.",
      "Stop until the light turns green.",
      "Stop then go straight."
    ],
    "answer": 1,
    "image": "./images/output-336.jpg"
  },
  {
    "id": "q283",
    "question": "TL016 - With green lights when turning left, you should –",
    "options": [
      "Wait behind the stop line until there is room.",
      "Move forward slowly and then turn left.",
      "Enter the intersection and sound your horn."
    ],
    "answer": 1,
    "image": "./images/output-337.png"
  },
  {
    "id": "q284",
    "question": "TL017 - When approaching traffic lights that change from green to yellow, you must –",
    "options": [
      "Stop before the lights unless too close to do so safely.",
      "Drive through without accelerating.",
      "Accelerate to clear before red."
    ],
    "answer": 1,
    "image": "./images/output-321.png"
  },
  {
    "id": "q285",
    "question": "TL018 - Temporary traffic lights at road works –",
    "options": [
      "Must be obeyed.",
      "Apply only to road works vehicles.",
      "Warn motorists of construction works."
    ],
    "answer": 1,
    "image": "./images/output-339.png"
  },
  {
    "id": "q286",
    "question": "TL019 - Where do you stop at temporary traffic lights?",
    "options": [
      "At the 'Stop here on red signal' sign.",
      "Where the lane ends.",
      "After the traffic lights, but before the construction zone."
    ],
    "answer": 1,
    "image": "./images/output-340.jpg"
  },
  {
    "id": "q287",
    "question": "SI001 - When you see this sign you should –",
    "options": [
      "Not drive beyond the sign.",
      "Drive with caution.",
      "Not pass another vehicle."
    ],
    "answer": 1,
    "image": "./images/output-341.png"
  },
  {
    "id": "q288",
    "question": "SI003 - What does this sign mean?",
    "options": [
      "All right lane traffic must turn right at the next intersection.",
      "Right lane traffic may turn right or go straight ahead at the next intersection.",
      "One way traffic ahead."
    ],
    "answer": 1,
    "image": "./images/output-342.png"
  },
  {
    "id": "q289",
    "question": "SI004 - What does this sign mean?",
    "options": [
      "Traffic travels in each direction.",
      "No turns permitted.",
      "Double lane bridge ahead."
    ],
    "answer": 1,
    "image": "./images/output-343.png"
  },
  {
    "id": "q290",
    "question": "SI006 - What does this sign mean?",
    "options": [
      "You must not turn to the right.",
      "You may turn to the right.",
      "You must give way to traffic on your right."
    ],
    "answer": 1,
    "image": "./images/output-344.png"
  },
  {
    "id": "q291",
    "question": "SI007 - What does this sign mean?",
    "options": [
      "You must not turn to the left.",
      "You must not turn to the left or right.",
      "You must not turn to the right."
    ],
    "answer": 1,
    "image": "./images/output-345.png"
  },
  {
    "id": "q292",
    "question": "SI008 - What does this sign mean?",
    "options": [
      "All traffic must travel in the direction of the arrow.",
      "Follow the arrow unless turning right.",
      "Road curves to the left ahead."
    ],
    "answer": 1,
    "image": "./images/output-346.png"
  },
  {
    "id": "q293",
    "question": "SI009 - What does this sign mean?",
    "options": [
      "Travel only in the direction of the arrow.",
      "No left turn.",
      "One lane bridge ahead; slow down."
    ],
    "answer": 1,
    "image": "./images/output-347.png"
  },
  {
    "id": "q294",
    "question": "SI013 - What does this sign mean?",
    "options": [
      "You are not to exceed 60 km/h.",
      "You can go faster than 60 km/h.",
      "You are on Highway 60."
    ],
    "answer": 1,
    "image": "./images/output-348.png"
  },
  {
    "id": "q295",
    "question": "SI014 - What does this sign mean?",
    "options": [
      "You must not drive faster than 100 km/h.",
      "You must drive faster than 100 km/h.",
      "It applies only to truck drivers."
    ],
    "answer": 1,
    "image": "./images/output-349.png"
  },
  {
    "id": "q296",
    "question": "SI016 - What does this sign mean?",
    "options": [
      "Drive carefully and watch for kangaroos for the next 30 km.",
      "Zoo 30 km ahead.",
      "Nature reserve 30 km ahead."
    ],
    "answer": 1,
    "image": "./images/output-350.png"
  },
  {
    "id": "q297",
    "question": "SI017 - What does this sign mean?",
    "options": [
      "T‑intersection ahead: give way to vehicles from both sides.",
      "No through road ahead – slow down.",
      "Tollway ahead: be prepared to pay."
    ],
    "answer": 1,
    "image": "./images/output-351.png"
  },
  {
    "id": "q298",
    "question": "SI018 - When you see this sign you –",
    "options": [
      "Must not stop at the kerb during the times shown.",
      "Must not stop here at any time.",
      "May stop to pick up or drop off passengers."
    ],
    "answer": 1,
    "image": "./images/output-352.png"
  },
  {
    "id": "q299",
    "question": "SI019 - You are most likely to find this sign –",
    "options": [
      "On the approach to a bridge that can only accommodate two vehicles.",
      "When a bridge is unsafe to drive on.",
      "Near a pedestrian footbridge."
    ],
    "answer": 1,
    "image": "./images/output-353.png"
  },
  {
    "id": "q300",
    "question": "SI020 - What does this sign mean?",
    "options": [
      "Road may be slippery when wet; slow down and drive carefully.",
      "Sharp turns ahead.",
      "Road under repair; drive carefully."
    ],
    "answer": 1,
    "image": "./images/output-354.png"
  },
  {
    "id": "q301",
    "question": "SI021 - You are most likely to find this sign –",
    "options": [
      "As you approach a winding road; slow down.",
      "If there is a steep hill ahead.",
      "If an unsealed road is ahead."
    ],
    "answer": 1,
    "image": "./images/output-355.png"
  },
  {
    "id": "q302",
    "question": "SI022 - What does this sign mean?",
    "options": [
      "A sharp depression ahead; be prepared and slow down.",
      "Do not drive with high beam.",
      "Police station ahead."
    ],
    "answer": 1,
    "image": "./images/output-356.png"
  },
  {
    "id": "q303",
    "question": "SI024 - What does this sign mean?",
    "options": [
      "Sharp bend to the right ahead; slow down.",
      "Turn around – you are going the wrong way.",
      "No right turn allowed."
    ],
    "answer": 1,
    "image": "./images/output-357.png"
  },
  {
    "id": "q304",
    "question": "SI025 - You are most likely to find this sign where –",
    "options": [
      "Children may be crossing; slow down and be ready to stop.",
      "There is an athletic field ahead.",
      "Pedestrians are not allowed."
    ],
    "answer": 1,
    "image": "./images/output-358.png"
  },
  {
    "id": "q305",
    "question": "SI026 - What does this sign mean?",
    "options": [
      "Crossroads ahead; reduce speed and watch for traffic and pedestrians.",
      "Hospital ahead; drive carefully.",
      "Cemetery ahead."
    ],
    "answer": 1,
    "image": "./images/output-359.png"
  },
  {
    "id": "q306",
    "question": "SI027 - If the red lights on this sign are flashing, you must –",
    "options": [
      "Stop until the red lights stop flashing, then proceed if safe.",
      "Slow down and cross if no train is coming.",
      "Stop until the train has passed, then proceed immediately."
    ],
    "answer": 1,
    "image": "./images/output-360.png"
  },
  {
    "id": "q307",
    "question": "SI028 - You should expect this sign if –",
    "options": [
      "A give way sign is ahead; slow down and be prepared to stop.",
      "You are approaching a school or playground.",
      "You are approaching an intersection with traffic lights; be prepared to stop."
    ],
    "answer": 1,
    "image": "./images/output-361.png"
  },
  {
    "id": "q308",
    "question": "SI030 - What does this sign mean?",
    "options": [
      "Slow down and beware of trucks entering from the side.",
      "Trucks must use low gear.",
      "Heavy vehicle checking station ahead."
    ],
    "answer": 1,
    "image": "./images/output-362.png"
  },
  {
    "id": "q309",
    "question": "SI031 - What does this sign mean?",
    "options": [
      "Slow down and look out for pedestrians crossing ahead.",
      "Stop and help elderly pedestrians.",
      "Hospital ahead; slow down."
    ],
    "answer": 1,
    "image": "./images/output-363.png"
  },
  {
    "id": "q310",
    "question": "SI032 - What does this sign mean?",
    "options": [
      "Pedestrian crossing ahead; slow down and be ready to stop.",
      "Overhead footbridge ahead.",
      "Joggers ahead; drive carefully."
    ],
    "answer": 1,
    "image": "./images/output-364.png"
  },
  {
    "id": "q311",
    "question": "SI033 - You should expect this sign when –",
    "options": [
      "A divided road ends and two‑way traffic is ahead.",
      "A one‑way street is ahead.",
      "A one‑lane bridge is ahead."
    ],
    "answer": 1,
    "image": "./images/output-365.png"
  },
  {
    "id": "q312",
    "question": "SI035 - What does this sign mean?",
    "options": [
      "Workers ahead; slow down and be prepared to stop.",
      "Children's playground ahead; slow down and be prepared to stop.",
      "Do not litter."
    ],
    "answer": 1,
    "image": "./images/output-366.png"
  },
  {
    "id": "q313",
    "question": "SI036 - What does this sign mean?",
    "options": [
      "Watch out for bicycle riders when turning.",
      "Bicycle riders are not allowed.",
      "You are approaching a children's playground; slow down."
    ],
    "answer": 1,
    "image": "./images/output-367.png"
  },
  {
    "id": "q314",
    "question": "SI038 - What does this sign mean?",
    "options": [
      "If traffic lights are out or the amber is flashing, stop and give way as if at a stop sign.",
      "Stop – red light camera in operation.",
      "Stop at all times and give way to all traffic."
    ],
    "answer": 1,
    "image": "./images/output-368.png"
  },
  {
    "id": "q315",
    "question": "SI039 - What does this sign mean?",
    "options": [
      "Stop sign ahead; slow down and prepare to stop.",
      "Approaching a roundabout; prepare to give way.",
      "One way traffic ahead."
    ],
    "answer": 1,
    "image": "./images/output-369.png"
  },
  {
    "id": "q316",
    "question": "SI040 - What does this sign mean?",
    "options": [
      "Traffic controller ahead; slow down and be prepared to stop.",
      "School children crossing ahead; prepare to stop.",
      "Traffic lights out of order; police on duty ahead."
    ],
    "answer": 1,
    "image": "./images/output-370.png"
  },
  {
    "id": "q317",
    "question": "SI041 - What does this sign mean?",
    "options": [
      "Steep downgrade ahead; slow down.",
      "Road ahead slippery when wet; drive carefully.",
      "Road under repair; slow down."
    ],
    "answer": 1,
    "image": "./images/output-371.png"
  },
  {
    "id": "q318",
    "question": "SI042 - You should expect this sign when –",
    "options": [
      "A divided road is ahead; prepare for a change in traffic.",
      "A two-lane bridge is ahead; slow down.",
      "Freeway conditions are ahead; maximum speed is 100 km/h."
    ],
    "answer": 1,
    "image": "./images/output-372.png"
  },
  {
    "id": "q319",
    "question": "SI043 - What does this sign mean?",
    "options": [
      "Railway level crossing with flashing signals ahead; slow down and be ready to stop.",
      "Intersection with traffic lights ahead; prepare to stop.",
      "Red light camera in operation ahead."
    ],
    "answer": 1,
    "image": "./images/output-373.png"
  },
  {
    "id": "q320",
    "question": "SI045 - What does this sign mean?",
    "options": [
      "Road narrows ahead; slow down and prepare.",
      "Form one lane of traffic.",
      "Merging traffic; give way to your right."
    ],
    "answer": 1,
    "image": "./images/output-374.png"
  },
  {
    "id": "q321",
    "question": "SI046 - What does this sign mean?",
    "options": [
      "Vehicles are not allowed to stop at the kerb except in a medical emergency.",
      "Vehicles must not stop at the kerb, except for picking up passengers.",
      "Vehicles must not stop at the kerb unless picking up goods."
    ],
    "answer": 1,
    "image": "./images/output-375.png"
  },
  {
    "id": "q322",
    "question": "SI048 - What does this sign mean?",
    "options": [
      "Vehicles carrying three or more people and motorcycles may use this lane.",
      "Motor cars carrying one passenger may use this lane.",
      "This lane is reserved for bicycle riders only."
    ],
    "answer": 1,
    "image": "./images/output-376.png"
  },
  {
    "id": "q323",
    "question": "SI049 - What does this sign mean?",
    "options": [
      "Railway level crossing ahead; slow down, look out for trains, and be prepared to stop.",
      "Cattle or sheep crossing ahead; drive slowly.",
      "Give way sign ahead; slow down and be prepared to stop."
    ],
    "answer": 1,
    "image": "./images/output-377.png"
  },
  {
    "id": "q324",
    "question": "SI050 - When you see this sign, you should –",
    "options": [
      "Drive carefully and watch for traffic entering from a side road.",
      "Take care of trucks crossing ahead.",
      "Take a break—a rest area is ahead."
    ],
    "answer": 1,
    "image": "./images/output-378.png"
  },
  {
    "id": "q325",
    "question": "SI051 - When you see this sign you must –",
    "options": [
      "Stop at the stop line and give way to all traffic.",
      "Stop at the stop line and give way only to traffic on your right.",
      "Slow down and be ready to stop if there is danger."
    ],
    "answer": 1,
    "image": "./images/output-379.png"
  },
  {
    "id": "q326",
    "question": "SI052 - When you see this sign you must –",
    "options": [
      "Slow down and be ready to stop and give way to any danger.",
      "Stop and give way even if the intersection is clear.",
      "Slow down and only give way to traffic on your right if danger exists."
    ],
    "answer": 1,
    "image": "./images/output-380.png"
  },
  {
    "id": "q327",
    "question": "SI053 - When you see this sign you should –",
    "options": [
      "Come to a complete stop, look both ways for trains, then proceed with caution.",
      "Slow down and drive slowly over the crossing while looking both ways.",
      "Stop only if a train is present."
    ],
    "answer": 1,
    "image": "./images/output-381.png"
  },
  {
    "id": "q328",
    "question": "SI056 - What does this sign mean?",
    "options": [
      "Slow down—the maximum safe speed around the next curve is 35 km/h.",
      "Winding road ahead for 35 km.",
      "Next main town is 35 km to the right."
    ],
    "answer": 1,
    "image": "./images/output-382.png"
  },
  {
    "id": "q329",
    "question": "SI057 - When you see this sign you should –",
    "options": [
      "Slow down and be ready to stop if the lights flash, warning of an approaching train.",
      "Continue at the same speed and ignore the flashing.",
      "Stop in the middle of the tracks and look both ways."
    ],
    "answer": 1,
    "image": "./images/output-383.png"
  },
  {
    "id": "q330",
    "question": "SI058 - What does this sign mean?",
    "options": [
      "You must stay in or move to the left lane unless overtaking.",
      "You must stay in the left lane and not overtake.",
      "You can only overtake on the left."
    ],
    "answer": 1,
    "image": "./images/output-384.jpg"
  },
  {
    "id": "q331",
    "question": "SI059 - When you see this sign, what must you do?",
    "options": [
      "Slow down and be ready to stop and give way to a train.",
      "Stop before the crossing, wait one minute, then proceed if clear.",
      "Drive quickly over the crossing."
    ],
    "answer": 1,
    "image": "./images/output-385.jpg"
  },
  {
    "id": "q332",
    "question": "SI060 - What does this sign mean?",
    "options": [
      "Slow down, be ready to stop and give way to vehicles on the roundabout.",
      "All traffic must turn back at the roundabout.",
      "Stop at all times and give way to traffic on your right."
    ],
    "image": "./images/output-386.jpg",
    "answer": 1
  },
  {
    "id": "q333",
    "question": "SI061 - When you see this sign, you should –",
    "options": [
      "Drive carefully, as you are nearing the top of a hill with limited visibility.",
      "Watch out for flooding ahead.",
      "Slow down because there is a dangerous curve."
    ],
    "answer": 1,
    "image": "./images/output-387.jpg"
  },
  {
    "id": "q334",
    "question": "SI062 - What does this sign mean?",
    "options": [
      "There is a hump ahead; slow down.",
      "There is a tunnel ahead; turn on your headlights.",
      "The road is closed; turn back."
    ],
    "answer": 1,
    "image": "./images/output-388.jpg"
  },
  {
    "id": "q335",
    "question": "SI063 - What does this sign tell you?",
    "options": [
      "There may be animals near the road; slow down and be prepared to stop.",
      "Animals are crossing; stop and wait.",
      "You are approaching an animal farm."
    ],
    "answer": 1,
    "image": "./images/output-389.jpg"
  },
  {
    "id": "q336",
    "question": "SI064 - What does this sign mean?",
    "options": [
      "Only vehicles carrying a disabled person and displaying a mobility parking authority may park here.",
      "Motorcyclists may park here.",
      "Vehicles may park for up to ten minutes."
    ],
    "answer": 1,
    "image": "./images/output-390.jpg"
  }
];

