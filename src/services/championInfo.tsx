export const useChampionInfo = (championName: string) => {
  if (championName == "") {
    return console.log("No champion found.");
  }
  switch (championName) {
    case "Aatrox":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_R1.webm",
          },
        ],
        skinPath: [
          "Aatrox_0.jpg",
          "Aatrox_1.jpg",
          "Aatrox_2.jpg",
          "Aatrox_3.jpg",
          "Aatrox_7.jpg",
          "Aatrox_8.jpg",
          "Aatrox_9.jpg",
          "Aatrox_11.jpg",
          "Aatrox_20.jpg",
          "Aatrox_21.jpg",
          "Aatrox_30.jpg",
          "Aatrox_31.jpg",
          "Aatrox_33.jpg",
        ],
      };
    case "Ahri":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm",
          },
        ],
        skinPath: [
          "Ahri_0.jpg",
          "Ahri_1.jpg",
          "Ahri_2.jpg",
          "Ahri_3.jpg",
          "Ahri_4.jpg",
          "Ahri_5.jpg",
          "Ahri_6.jpg",
          "Ahri_7.jpg",
          "Ahri_14.jpg",
          "Ahri_15.jpg",
          "Ahri_16.jpg",
          "Ahri_17.jpg",
          "Ahri_27.jpg",
          "Ahri_28.jpg",
          "Ahri_42.jpg",
          "Ahri_65.jpg",
          "Ahri_66.jpg",
          "Ahri_76.jpg",
          "Ahri_85.jpg",
          "Ahri_86.jpg",
        ],
      };
    case "Akali":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_R1.webm",
          },
        ],
        skinPath: [
          "Akali_0.jpg",
          "Akali_1.jpg",
          "Akali_2.jpg",
          "Akali_3.jpg",
          "Akali_4.jpg",
          "Akali_5.jpg",
          "Akali_6.jpg",
          "Akali_7.jpg",
          "Akali_8.jpg",
          "Akali_9.jpg",
          "Akali_13.jpg",
          "Akali_14.jpg",
          "Akali_15.jpg",
          "Akali_32.jpg",
          "Akali_50.jpg",
          "Akali_60.jpg",
          "Akali_61.jpg",
          "Akali_68.jpg",
          "Akali_70.jpg",
          "Akali_71.jpg",
          "Akali_82.jpg",
        ],
      };
    case "Akshan":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_R1.webm",
          },
        ],
        skinPath: [
          "Akshan_0.jpg",
          "Akshan_1.jpg",
          "Akshan_10.jpg",
          "Akshan_20.jpg",
        ],
      };
    case "Alistar":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_R1.webm",
          },
        ],
        skinPath: [
          "Alistar_0.jpg",
          "Alistar_1.jpg",
          "Alistar_2.jpg",
          "Alistar_3.jpg",
          "Alistar_4.jpg",
          "Alistar_5.jpg",
          "Alistar_6.jpg",
          "Alistar_7.jpg",
          "Alistar_8.jpg",
          "Alistar_9.jpg",
          "Alistar_10.jpg",
          "Alistar_19.jpg",
          "Alistar_20.jpg",
          "Alistar_22.jpg",
          "Alistar_29.jpg",
        ],
      };
    case "Amumu":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_R1.webm",
          },
        ],
        skinPath: [
          "Amumu_0.jpg",
          "Amumu_1.jpg",
          "Amumu_2.jpg",
          "Amumu_3.jpg",
          "Amumu_4.jpg",
          "Amumu_5.jpg",
          "Amumu_6.jpg",
          "Amumu_7.jpg",
          "Amumu_8.jpg",
          "Amumu_17.jpg",
          "Amumu_23.jpg",
          "Amumu_24.jpg",
          "Amumu_34.jpg",
          "Amumu_44.jpg",
        ],
      };
    case "Anivia":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_R1.webm",
          },
        ],
        skinPath: [
          "Anivia_0.jpg",
          "Anivia_1.jpg",
          "Anivia_2.jpg",
          "Anivia_3.jpg",
          "Anivia_4.jpg",
          "Anivia_5.jpg",
          "Anivia_6.jpg",
          "Anivia_7.jpg",
          "Anivia_8.jpg",
          "Anivia_17.jpg",
          "Anivia_27.jpg",
          "Anivia_37.jpg",
          "Anivia_46.jpg",
        ],
      };
    case "Annie":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_R1.webm",
          },
        ],
        skinPath: [
          "Annie_0.jpg",
          "Annie_1.jpg",
          "Annie_2.jpg",
          "Annie_3.jpg",
          "Annie_4.jpg",
          "Annie_5.jpg",
          "Annie_6.jpg",
          "Annie_7.jpg",
          "Annie_8.jpg",
          "Annie_9.jpg",
          "Annie_10.jpg",
          "Annie_11.jpg",
          "Annie_12.jpg",
          "Annie_13.jpg",
          "Annie_22.jpg",
          "Annie_31.jpg",
          "Annie_40.jpg",
          "Annie_50.jpg",
        ],
      };
    case "Aphelios":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_R1.webm",
          },
        ],
        skinPath: [
          "Aphelios_0.jpg",
          "Aphelios_9.jpg",
          "Aphelios_18.jpg",
          "Aphelios_20.jpg",
          "Aphelios_30.jpg",
        ],
      };
    case "Ashe":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_R1.webm",
          },
        ],
        skinPath: [
          "Ashe_0.jpg",
          "Ashe_1.jpg",
          "Ashe_2.jpg",
          "Ashe_3.jpg",
          "Ashe_4.jpg",
          "Ashe_5.jpg",
          "Ashe_6.jpg",
          "Ashe_7.jpg",
          "Ashe_8.jpg",
          "Ashe_9.jpg",
          "Ashe_11.jpg",
          "Ashe_17.jpg",
          "Ashe_23.jpg",
          "Ashe_32.jpg",
          "Ashe_43.jpg",
          "Ashe_52.jpg",
          "Ashe_63.jpg",
          "Ashe_65.jpg",
          "Ashe_67.jpg",
        ],
      };
    case "Aurelion Sol":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_R1.webm",
          },
        ],
        skinPath: [
          "AurelionSol_0.jpg",
          "AurelionSol_1.jpg",
          "AurelionSol_2.jpg",
          "AurelionSol_11.jpg",
          "AurelionSol_21.jpg",
          "AurelionSol_31.jpg",
        ],
      };
    case "Aurora":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aurora_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0893/ability_0893_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0893/ability_0893_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0893/ability_0893_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0893/ability_0893_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0893/ability_0893_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0893/ability_0893_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0893/ability_0893_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0893/ability_0893_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0893/ability_0893_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0893/ability_0893_R1.webm",
          },
        ],
        skinPath: ["Aurora_0.jpg", "Aurora_1.jpg"],
      };
    case "Azir":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_R1.webm",
          },
        ],
        skinPath: [
          "Azir_0.jpg",
          "Azir_1.jpg",
          "Azir_2.jpg",
          "Azir_3.jpg",
          "Azir_4.jpg",
          "Azir_5.jpg",
          "Azir_14.jpg",
          "Azir_19.jpg",
        ],
      };
    case "Bard":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_R1.webm",
          },
        ],
        skinPath: [
          "Bard_0.jpg",
          "Bard_1.jpg",
          "Bard_5.jpg",
          "Bard_6.jpg",
          "Bard_8.jpg",
          "Bard_17.jpg",
          "Bard_26.jpg",
          "Bard_35.jpg",
        ],
      };
    default:
      return null;
  }
};

/* 

https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg 
https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg
https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg
https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg
*/
