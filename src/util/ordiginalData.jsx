import { v4 as uuidv4 } from "uuid";
import { Fragment } from "react";
const SendOriginalDataClubsComponent = () => {
  const clubs = [
    {
      name: "Sofia Center",
      address: "Sofia, bul. Aleksandar Stamboliyski 41",
      geoLocation: { lat: 42.69729077097609, lon: 23.317056955920172 },
      workingHours: "7.00 - 21.30",
      workDays: [1, 2, 3, 4, 5, 6],
      phone: "0888 88 88 88",
      id: uuidv4(),
      equipment: {
        balanceTools: true,
        dumbbells: true,
        fitnessMachines: true,
        ropes: true,
        steppers: false,
        functionalZone: true,
        stretchingZone: true,
        treadmills: true,
        boxingRing: true,
        workoutConstruction: true,
      },
      wellness: {
        sauna: true,
        steamBath: true,
      },
    },
    {
      name: "Sofia Lyulin",
      address: "Sofia, ul. Pancho Vladigerov 21",
      geoLocation: { lat: 42.713264924349055, lon: 23.24888154242746 },
      workingHours: "7.00 - 21.30",
      workDays: [1, 2, 3, 4, 5, 6],
      phone: "0887 88 88 88",
      id: uuidv4(),
      equipment: {
        balanceTools: true,
        dumbbells: true,
        fitnessMachines: true,
        ropes: true,
        steppers: true,
        functionalZone: false,
        stretchingZone: true,
        treadmills: true,
        boxingRing: true,
        workoutConstruction: true,
      },
      wellness: {
        sauna: true,
        steamBath: true,
      },
    },
    {
      name: "Sofia Mladost",
      address: "Sofia, bul. Aleksandar Malinov 78",
      geoLocation: { lat: 42.63632565792078, lon: 23.36977386941168 },
      workingHours: "7.00 - 21.30",
      workDays: [1, 2, 3, 4, 5, 6],
      phone: "0887 86 86 86",
      id: uuidv4(),
      equipment: {
        balanceTools: true,
        dumbbells: true,
        fitnessMachines: true,
        ropes: true,
        steppers: true,
        functionalZone: true,
        stretchingZone: false,
        treadmills: true,
        boxingRing: true,
        workoutConstruction: true,
      },
      wellness: {
        sauna: true,
        steamBath: false,
      },
    },
    {
      name: "Sofia Pavlovo",
      address: "Sofia, ul. Alexander Pushkin 38",
      geoLocation: { lat: 42.66163252401128, lon: 23.264926969504085 },
      workingHours: "7.00 - 21.30",
      workDays: [1, 2, 3, 4, 5, 6],
      phone: "0887 83 83 83",
      id: uuidv4(),
      equipment: {
        balanceTools: true,
        dumbbells: true,
        fitnessMachines: true,
        ropes: true,
        steppers: true,
        functionalZone: true,
        stretchingZone: false,
        treadmills: true,
        boxingRing: true,
        workoutConstruction: true,
      },
      wellness: {
        sauna: false,
        steamBath: false,
      },
    },
    {
      name: "Plovdiv Trakia",
      address: "Plovdiv, ul. Georgi Danchov 16",
      geoLocation: { lat: 42.13878058136747, lon: 24.787433525222482 },
      workingHours: "7.00 - 21.30",
      workDays: [1, 2, 3, 4, 5, 6],
      phone: "0887 84 84 84",
      id: uuidv4(),
      equipment: {
        balanceTools: true,
        dumbbells: true,
        fitnessMachines: true,
        ropes: true,
        steppers: true,
        functionalZone: true,
        stretchingZone: false,
        treadmills: true,
        boxingRing: true,
        workoutConstruction: true,
      },
      wellness: {
        sauna: true,
        steamBath: true,
      },
    },
    {
      name: "Plovdiv Center",
      address: "Plovdiv, ul. Ivan Andonov 5",
      geoLocation: { lat: 42.141660340827904, lon: 24.739933484743627 },
      workingHours: "7.00 - 21.30",
      workDays: [1, 2, 3, 4, 5, 6],
      phone: "0887 85 85 85",
      id: uuidv4(),
      equipment: {
        balanceTools: true,
        dumbbells: true,
        fitnessMachines: false,
        ropes: true,
        steppers: true,
        functionalZone: true,
        stretchingZone: true,
        treadmills: true,
        boxingRing: true,
        workoutConstruction: true,
      },
      wellness: {
        sauna: true,
        steamBath: true,
      },
    },
    {
      name: "Burgas Central Park",
      address: "Burgas, ul. Dame Gruev 8",
      geoLocation: { lat: 42.51408531283424, lon: 27.4501782559161 },
      workingHours: "7.00 - 21.30",
      workDays: [1, 2, 3, 4, 5, 6],
      phone: "0887 82 82 82",
      id: uuidv4(),
      equipment: {
        balanceTools: true,
        dumbbells: true,
        fitnessMachines: false,
        ropes: true,
        steppers: true,
        functionalZone: true,
        stretchingZone: true,
        treadmills: false,
        boxingRing: true,
        workoutConstruction: true,
      },
      wellness: {
        sauna: true,
        steamBath: true,
      },
    },
    {
      name: "Varna Center",
      address: "Varna, ul. General Kolev 3",
      geoLocation: { lat: 43.20793873871141, lon: 27.910629969424402 },
      workingHours: "7.00 - 21.30",
      workDays: [1, 2, 3, 4, 5, 6],
      phone: "0887 81 81 81",
      id: uuidv4(),
      equipment: {
        balanceTools: true,
        dumbbells: true,
        fitnessMachines: false,
        ropes: true,
        steppers: true,
        functionalZone: true,
        stretchingZone: true,
        treadmills: true,
        boxingRing: true,
        workoutConstruction: true,
      },
      wellness: {
        sauna: true,
        steamBath: true,
      },
    },
    {
      name: "Varna Planet Mall",
      address: "Varna, bul. Slivnitsa 185",
      geoLocation: { lat: 43.22703005778861, lon: 27.875800015313523 },
      workingHours: "7.00 - 21.30",
      workDays: [1, 2, 3, 4, 5, 6],
      phone: "0887 81 81 81",
      id: uuidv4(),
      equipment: {
        balanceTools: true,
        dumbbells: true,
        fitnessMachines: false,
        ropes: true,
        steppers: true,
        functionalZone: true,
        stretchingZone: true,
        treadmills: true,
        boxingRing: true,
        workoutConstruction: true,
      },
      wellness: {
        sauna: false,
        steamBath: false,
      },
    },
    {
      name: "Varna Levski",
      address: "Varna, ul. Dimitar Ikonomov 36",
      geoLocation: { lat: 43.22060153604811, lon: 27.936078298260362 },
      workingHours: "7.00 - 21.30",
      workDays: [1, 2, 3, 4, 5, 6],
      phone: "0887 80 80 80",
      id: uuidv4(),
      equipment: {
        balanceTools: true,
        dumbbells: true,
        fitnessMachines: false,
        ropes: true,
        steppers: true,
        functionalZone: false,
        stretchingZone: false,
        treadmills: true,
        boxingRing: true,
        workoutConstruction: true,
      },
      wellness: {
        sauna: true,
        steamBath: true,
      },
    },
  ];
  const timetables = [
    {
      name: "Sofia Center",
      timetable: [
        {
          day: "Monday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Tuesday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Wednesday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Thursday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Friday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Saturday",
          activities: [
            { hour: "10.00", activity: "BOOTY" },
            { hour: "11.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "15.00", activity: "LES MILLS GRIT" },
            { hour: "16.00", activity: "LES MILLS CORE" },
            { hour: "17.00", activity: "Yoga" },
            { hour: "18.00", activity: "Folklore Dances" },
            { hour: "19.00", activity: "Pilates" },
          ],
        },
      ],
    },
    {
      name: "Sofia Lyulin",
      timetable: [
        {
          day: "Monday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Tuesday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Wednesday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Thursday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Friday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Saturday",
          activities: [
            { hour: "10.00", activity: "BOOTY" },
            { hour: "11.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "15.00", activity: "LES MILLS GRIT" },
            { hour: "16.00", activity: "LES MILLS CORE" },
            { hour: "17.00", activity: "Yoga" },
            { hour: "18.00", activity: "Folklore Dances" },
            { hour: "19.00", activity: "Pilates" },
          ],
        },
      ],
    },
    {
      name: "Sofia Mladost",
      timetable: [
        {
          day: "Monday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Tuesday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Wednesday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Thursday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Friday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Saturday",
          activities: [
            { hour: "10.00", activity: "BOOTY" },
            { hour: "11.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "15.00", activity: "LES MILLS GRIT" },
            { hour: "16.00", activity: "LES MILLS CORE" },
            { hour: "17.00", activity: "Yoga" },
            { hour: "18.00", activity: "Folklore Dances" },
            { hour: "19.00", activity: "Pilates" },
          ],
        },
      ],
    },
    {
      name: "Sofia Pavlovo",
      timetable: [
        {
          day: "Monday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Tuesday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Wednesday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Thursday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Friday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Saturday",
          activities: [
            { hour: "10.00", activity: "BOOTY" },
            { hour: "11.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "15.00", activity: "LES MILLS GRIT" },
            { hour: "16.00", activity: "LES MILLS CORE" },
            { hour: "17.00", activity: "Yoga" },
            { hour: "18.00", activity: "Folklore Dances" },
            { hour: "19.00", activity: "Pilates" },
          ],
        },
      ],
    },
    {
      name: "Plovdiv Trakia",
      timetable: [
        {
          day: "Monday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Tuesday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Wednesday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Thursday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Friday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Saturday",
          activities: [
            { hour: "10.00", activity: "BOOTY" },
            { hour: "11.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "15.00", activity: "LES MILLS GRIT" },
            { hour: "16.00", activity: "LES MILLS CORE" },
            { hour: "17.00", activity: "Yoga" },
            { hour: "18.00", activity: "Folklore Dances" },
            { hour: "19.00", activity: "Pilates" },
          ],
        },
      ],
    },
    {
      name: "Plovdiv Center",
      timetable: [
        {
          day: "Monday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Tuesday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Wednesday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Thursday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Friday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Saturday",
          activities: [
            { hour: "10.00", activity: "BOOTY" },
            { hour: "11.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "15.00", activity: "LES MILLS GRIT" },
            { hour: "16.00", activity: "LES MILLS CORE" },
            { hour: "17.00", activity: "Yoga" },
            { hour: "18.00", activity: "Folklore Dances" },
            { hour: "19.00", activity: "Pilates" },
          ],
        },
      ],
    },
    {
      name: "Burgas Central Park",
      timetable: [
        {
          day: "Monday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Tuesday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Wednesday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Thursday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Friday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Saturday",
          activities: [
            { hour: "10.00", activity: "BOOTY" },
            { hour: "11.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "15.00", activity: "LES MILLS GRIT" },
            { hour: "16.00", activity: "LES MILLS CORE" },
            { hour: "17.00", activity: "Yoga" },
            { hour: "18.00", activity: "Folklore Dances" },
            { hour: "19.00", activity: "Pilates" },
          ],
        },
      ],
    },
    {
      name: "Varna Center",
      timetable: [
        {
          day: "Monday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Tuesday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Wednesday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Thursday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Friday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Saturday",
          activities: [
            { hour: "10.00", activity: "BOOTY" },
            { hour: "11.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "15.00", activity: "LES MILLS GRIT" },
            { hour: "16.00", activity: "LES MILLS CORE" },
            { hour: "17.00", activity: "Yoga" },
            { hour: "18.00", activity: "Folklore Dances" },
            { hour: "19.00", activity: "Pilates" },
          ],
        },
      ],
    },
    {
      name: "Varna Planet Mall",
      timetable: [
        {
          day: "Monday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Tuesday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Wednesday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Thursday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Friday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Saturday",
          activities: [
            { hour: "10.00", activity: "BOOTY" },
            { hour: "11.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "15.00", activity: "LES MILLS GRIT" },
            { hour: "16.00", activity: "LES MILLS CORE" },
            { hour: "17.00", activity: "Yoga" },
            { hour: "18.00", activity: "Folklore Dances" },
            { hour: "19.00", activity: "Pilates" },
          ],
        },
      ],
    },
    {
      name: "Varna Levski",
      timetable: [
        {
          day: "Monday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Tuesday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Wednesday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Thursday",
          activities: [
            { hour: "08.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "17.00", activity: "Pilates" },
            { hour: "19.00", activity: "Tabata" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Friday",
          activities: [
            { hour: "08.00", activity: "BOOTY" },
            { hour: "09.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "LES MILLS GRIT" },
            { hour: "17.00", activity: "LES MILLS CORE" },
            { hour: "18.00", activity: "Pilates" },
            { hour: "19.00", activity: "LES MILLS GRIT" },
            { hour: "21.00", activity: "Folklore Dances" },
          ],
        },
        {
          day: "Saturday",
          activities: [
            { hour: "10.00", activity: "BOOTY" },
            { hour: "11.00", activity: "Tabata" },
            { hour: "12.00", activity: "Pilates" },
            { hour: "13.00", activity: "Yoga" },
            { hour: "14.00", activity: "Stretching" },
            { hour: "15.00", activity: "LES MILLS GRIT" },
            { hour: "16.00", activity: "LES MILLS CORE" },
            { hour: "17.00", activity: "Yoga" },
            { hour: "18.00", activity: "Folklore Dances" },
            { hour: "19.00", activity: "Pilates" },
          ],
        },
      ],
    },
  ];
  const sendClubs = async () => {
    const sendData = await fetch(
      "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/iron-fit-clubs.json",
      {
        method: "POST",
        body: JSON.stringify(clubs),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await sendData();
  };
  const sendTimetables = async () => {
    const sendData = await fetch(
      "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/iron-fit-timetables.json",
      {
        method: "POST",
        body: JSON.stringify(timetables),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await sendData();
  };
  return (
    <Fragment>
      <button onClick={sendClubs}>Click Me for Clubs!</button>
      <button onClick={sendTimetables}>Click Me for Timetables!</button>
    </Fragment>
  );
};
export default SendOriginalDataClubsComponent;
