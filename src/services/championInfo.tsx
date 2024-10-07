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
    case "Bel'Veth":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_R1.webm",
          },
        ],
        skinPath: [
          "Belveth_0.jpg",
          "Belveth_1.jpg",
          "Belveth_10.jpg",
          "Belveth_19.jpg",
        ],
      };
    case "Blitzcrank":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_R1.webm",
          },
        ],
        skinPath: [
          "Blitzcrank_0.jpg",
          "Blitzcrank_1.jpg",
          "Blitzcrank_2.jpg",
          "Blitzcrank_3.jpg",
          "Blitzcrank_4.jpg",
          "Blitzcrank_5.jpg",
          "Blitzcrank_6.jpg",
          "Blitzcrank_7.jpg",
          "Blitzcrank_11.jpg",
          "Blitzcrank_20.jpg",
          "Blitzcrank_21.jpg",
          "Blitzcrank_22.jpg",
          "Blitzcrank_29.jpg",
          "Blitzcrank_36.jpg",
          "Blitzcrank_47.jpg",
          "Blitzcrank_56.jpg",
        ],
      };
    case "Brand":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_R1.webm",
          },
        ],
        skinPath: [
          "Brand_0.jpg",
          "Brand_1.jpg",
          "Brand_2.jpg",
          "Brand_3.jpg",
          "Brand_4.jpg",
          "Brand_5.jpg",
          "Brand_6.jpg",
          "Brand_7.jpg",
          "Brand_8.jpg",
          "Brand_21.jpg",
          "Brand_22.jpg",
          "Brand_33.jpg",
          "Brand_42.jpg",
        ],
      };
    case "Braum":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_R1.webm",
          },
        ],
        skinPath: [
          "Braum_0.jpg",
          "Braum_1.jpg",
          "Braum_2.jpg",
          "Braum_3.jpg",
          "Braum_10.jpg",
          "Braum_11.jpg",
          "Braum_24.jpg",
          "Braum_33.jpg",
        ],
      };
    case "Briar":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Briar_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0233/ability_0233_R1.webm",
          },
        ],
        skinPath: ["Briar_0.jpg", "Briar_1.jpg", "Briar_10.jpg"],
      };
    case "Caitlyn":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_R1.webm",
          },
        ],
        skinPath: [
          "Caitlyn_0.jpg",
          "Caitlyn_1.jpg",
          "Caitlyn_2.jpg",
          "Caitlyn_3.jpg",
          "Caitlyn_4.jpg",
          "Caitlyn_5.jpg",
          "Caitlyn_6.jpg",
          "Caitlyn_10.jpg",
          "Caitlyn_11.jpg",
          "Caitlyn_13.jpg",
          "Caitlyn_19.jpg",
          "Caitlyn_20.jpg",
          "Caitlyn_22.jpg",
          "Caitlyn_28.jpg",
          "Caitlyn_29.jpg",
          "Caitlyn_30.jpg",
          "Caitlyn_39.jpg",
          "Caitlyn_48.jpg",
        ],
      };
    case "Camille":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_R1.webm",
          },
        ],
        skinPath: [
          "Camille_0.jpg",
          "Camille_1.jpg",
          "Camille_2.jpg",
          "Camille_10.jpg",
          "Camille_11.jpg",
          "Camille_21.jpg",
          "Camille_31.jpg",
          "Camille_32.jpg",
        ],
      };
    case "Cassiopeia":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_R1.webm",
          },
        ],
        skinPath: [
          "Cassiopeia_0.jpg",
          "Cassiopeia_1.jpg",
          "Cassiopeia_2.jpg",
          "Cassiopeia_3.jpg",
          "Cassiopeia_4.jpg",
          "Cassiopeia_8.jpg",
          "Cassiopeia_9.jpg",
          "Cassiopeia_18.jpg",
          "Cassiopeia_28.jpg",
        ],
      };
    case "Cho'Gath":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_R1.webm",
          },
        ],
        skinPath: [
          "Chogath_0.jpg",
          "Chogath_1.jpg",
          "Chogath_2.jpg",
          "Chogath_3.jpg",
          "Chogath_4.jpg",
          "Chogath_5.jpg",
          "Chogath_6.jpg",
          "Chogath_7.jpg",
          "Chogath_14.jpg",
          "Chogath_23.jpg",
          "Chogath_32.jpg",
        ],
      };
    case "Corki":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_P1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_R1.webm",
          },
        ],
        skinPath: [
          "Corki_0.jpg",
          "Corki_1.jpg",
          "Corki_2.jpg",
          "Corki_3.jpg",
          "Corki_4.jpg",
          "Corki_5.jpg",
          "Corki_6.jpg",
          "Corki_7.jpg",
          "Corki_8.jpg",
          "Corki_18.jpg",
          "Corki_26.jpg",
        ],
      };
    case "Darius":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_R1.webm",
          },
        ],
        skinPath: [
          "Darius_0.jpg",
          "Darius_1.jpg",
          "Darius_2.jpg",
          "Darius_3.jpg",
          "Darius_4.jpg",
          "Darius_8.jpg",
          "Darius_14.jpg",
          "Darius_15.jpg",
          "Darius_16.jpg",
          "Darius_24.jpg",
          "Darius_33.jpg",
          "Darius_43.jpg",
          "Darius_54.jpg",
          "Darius_64.jpg",
        ],
      };
    case "Diana":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_R1.webm",
          },
        ],
        skinPath: [
          "Diana_0.jpg",
          "Diana_1.jpg",
          "Diana_2.jpg",
          "Diana_3.jpg",
          "Diana_11.jpg",
          "Diana_12.jpg",
          "Diana_18.jpg",
          "Diana_25.jpg",
          "Diana_26.jpg",
          "Diana_27.jpg",
          "Diana_37.jpg",
          "Diana_47.jpg",
          "Diana_54.jpg",
        ],
      };
    case "Draven":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_R1.webm",
          },
        ],
        skinPath: [
          "Draven_0.jpg",
          "Draven_1.jpg",
          "Draven_2.jpg",
          "Draven_3.jpg",
          "Draven_4.jpg",
          "Draven_5.jpg",
          "Draven_6.jpg",
          "Draven_12.jpg",
          "Draven_13.jpg",
          "Draven_20.jpg",
          "Draven_29.jpg",
          "Draven_39.jpg",
          "Draven_48.jpg",
        ],
      };
    case "Dr. Mundo":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_R1.webm",
          },
        ],
        skinPath: [
          "DrMundo_0.jpg",
          "DrMundo_1.jpg",
          "DrMundo_2.jpg",
          "DrMundo_3.jpg",
          "DrMundo_4.jpg",
          "DrMundo_5.jpg",
          "DrMundo_6.jpg",
          "DrMundo_7.jpg",
          "DrMundo_8.jpg",
          "DrMundo_9.jpg",
          "DrMundo_10.jpg",
          "DrMundo_21.jpg",
        ],
      };
    case "Ekko":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_R1.webm",
          },
        ],
        skinPath: [
          "Ekko_0.jpg",
          "Ekko_1.jpg",
          "Ekko_2.jpg",
          "Ekko_3.jpg",
          "Ekko_11.jpg",
          "Ekko_12.jpg",
          "Ekko_19.jpg",
          "Ekko_28.jpg",
          "Ekko_36.jpg",
          "Ekko_45.jpg",
          "Ekko_46.jpg",
          "Ekko_56.jpg",
        ],
      };
    case "Elise":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_R1.webm",
          },
        ],
        skinPath: [
          "Elise_0.jpg",
          "Elise_1.jpg",
          "Elise_2.jpg",
          "Elise_3.jpg",
          "Elise_4.jpg",
          "Elise_5.jpg",
          "Elise_6.jpg",
          "Elise_15.jpg",
          "Elise_24.jpg",
        ],
      };
    case "Evelynn":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_R1.webm",
          },
        ],
        skinPath: [
          "Evelynn_0.jpg",
          "Evelynn_1.jpg",
          "Evelynn_2.jpg",
          "Evelynn_3.jpg",
          "Evelynn_4.jpg",
          "Evelynn_5.jpg",
          "Evelynn_6.jpg",
          "Evelynn_7.jpg",
          "Evelynn_8.jpg",
          "Evelynn_15.jpg",
          "Evelynn_24.jpg",
          "Evelynn_31.jpg",
          "Evelynn_32.jpg",
          "Evelynn_42.jpg",
          "Evelynn_52.jpg",
          "Evelynn_53.jpg",
        ],
      };
    case "Ezreal":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_Q1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_R1.webm",
          },
        ],
        skinPath: [
          "Ezreal_0.jpg",
          "Ezreal_1.jpg",
          "Ezreal_2.jpg",
          "Ezreal_3.jpg",
          "Ezreal_4.jpg",
          "Ezreal_5.jpg",
          "Ezreal_6.jpg",
          "Ezreal_7.jpg",
          "Ezreal_8.jpg",
          "Ezreal_9.jpg",
          "Ezreal_18.jpg",
          "Ezreal_19.jpg",
          "Ezreal_20.jpg",
          "Ezreal_21.jpg",
          "Ezreal_22.jpg",
          "Ezreal_23.jpg",
          "Ezreal_25.jpg",
          "Ezreal_33.jpg",
          "Ezreal_43.jpg",
          "Ezreal_44.jpg",
          "Ezreal_54.jpg",
        ],
      };
    case "Fiddlesticks":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/FiddleSticks_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_R1.webm",
          },
        ],
        skinPath: [
          "FiddleSticks_0.jpg",
          "FiddleSticks_1.jpg",
          "FiddleSticks_2.jpg",
          "FiddleSticks_3.jpg",
          "FiddleSticks_4.jpg",
          "FiddleSticks_5.jpg",
          "FiddleSticks_6.jpg",
          "FiddleSticks_7.jpg",
          "FiddleSticks_8.jpg",
          "FiddleSticks_9.jpg",
          "FiddleSticks_27.jpg",
          "FiddleSticks_37.jpg",
        ],
      };
    case "Fiora":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_R1.webm",
          },
        ],
        skinPath: [
          "Fiora_0.jpg",
          "Fiora_1.jpg",
          "Fiora_2.jpg",
          "Fiora_3.jpg",
          "Fiora_4.jpg",
          "Fiora_5.jpg",
          "Fiora_22.jpg",
          "Fiora_23.jpg",
          "Fiora_31.jpg",
          "Fiora_41.jpg",
          "Fiora_50.jpg",
          "Fiora_51.jpg",
          "Fiora_60.jpg",
          "Fiora_69.jpg",
          "Fiora_80.jpg",
          "Fiora_89.jpg",
        ],
      };
    case "Fizz":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_R1.webm",
          },
        ],
        skinPath: [
          "Fizz_0.jpg",
          "Fizz_1.jpg",
          "Fizz_2.jpg",
          "Fizz_3.jpg",
          "Fizz_4.jpg",
          "Fizz_8.jpg",
          "Fizz_9.jpg",
          "Fizz_10.jpg",
          "Fizz_14.jpg",
          "Fizz_15.jpg",
          "Fizz_16.jpg",
          "Fizz_25.jpg",
          "Fizz_26.jpg",
          "Fizz_35.jpg",
        ],
      };
    case "Galio":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_Q1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_R1.webm",
          },
        ],
        skinPath: [
          "Galio_0.jpg",
          "Galio_1.jpg",
          "Galio_2.jpg",
          "Galio_3.jpg",
          "Galio_4.jpg",
          "Galio_5.jpg",
          "Galio_6.jpg",
          "Galio_13.jpg",
          "Galio_19.jpg",
          "Galio_28.jpg",
        ],
      };
    case "Gangplank":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_R1.webm",
          },
        ],
        skinPath: [
          "Gangplank_0.jpg",
          "Gangplank_1.jpg",
          "Gangplank_2.jpg",
          "Gangplank_3.jpg",
          "Gangplank_4.jpg",
          "Gangplank_5.jpg",
          "Gangplank_6.jpg",
          "Gangplank_7.jpg",
          "Gangplank_8.jpg",
          "Gangplank_14.jpg",
          "Gangplank_21.jpg",
          "Gangplank_23.jpg",
          "Gangplank_33.jpg",
        ],
      };
    case "Garen":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_R1.webm",
          },
        ],
        skinPath: [
          "Garen_0.jpg",
          "Garen_1.jpg",
          "Garen_2.jpg",
          "Garen_3.jpg",
          "Garen_4.jpg",
          "Garen_5.jpg",
          "Garen_6.jpg",
          "Garen_10.jpg",
          "Garen_11.jpg",
          "Garen_13.jpg",
          "Garen_14.jpg",
          "Garen_22.jpg",
          "Garen_23.jpg",
          "Garen_24.jpg",
          "Garen_33.jpg",
          "Garen_44.jpg",
        ],
      };
    case "Gnar":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_R1.webm",
          },
        ],
        skinPath: [
          "Gnar_0.jpg",
          "Gnar_1.jpg",
          "Gnar_2.jpg",
          "Gnar_3.jpg",
          "Gnar_4.jpg",
          "Gnar_13.jpg",
          "Gnar_14.jpg",
          "Gnar_15.jpg",
          "Gnar_22.jpg",
          "Gnar_31.jpg",
        ],
      };
    case "Gragas":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_Q1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_R1.webm",
          },
        ],
        skinPath: [
          "Gragas_0.jpg",
          "Gragas_1.jpg",
          "Gragas_2.jpg",
          "Gragas_3.jpg",
          "Gragas_4.jpg",
          "Gragas_5.jpg",
          "Gragas_6.jpg",
          "Gragas_7.jpg",
          "Gragas_8.jpg",
          "Gragas_9.jpg",
          "Gragas_10.jpg",
          "Gragas_11.jpg",
          "Gragas_20.jpg",
          "Gragas_29.jpg",
        ],
      };
    case "Graves":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_Q1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_R1.webm",
          },
        ],
        skinPath: [
          "Graves_0.jpg",
          "Graves_1.jpg",
          "Graves_2.jpg",
          "Graves_3.jpg",
          "Graves_4.jpg",
          "Graves_5.jpg",
          "Graves_6.jpg",
          "Graves_7.jpg",
          "Graves_14.jpg",
          "Graves_18.jpg",
          "Graves_25.jpg",
          "Graves_35.jpg",
          "Graves_42.jpg",
          "Graves_45.jpg",
        ],
      };
    case "Gwen":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_R1.webm",
          },
        ],
        skinPath: [
          "Gwen_0.jpg",
          "Gwen_1.jpg",
          "Gwen_11.jpg",
          "Gwen_20.jpg",
          "Gwen_30.jpg",
        ],
      };
    case "Hecarim":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0120/ability_0120_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0120/ability_0120_Q1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0120/ability_0120_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0120/ability_0120_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0120/ability_0120_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0120/ability_0120_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0120/ability_0120_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0120/ability_0120_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0120/ability_0120_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0120/ability_0120_R1.webm",
          },
        ],
        skinPath: [
          "Hecarim_0.jpg",
          "Hecarim_1.jpg",
          "Hecarim_2.jpg",
          "Hecarim_3.jpg",
          "Hecarim_4.jpg",
          "Hecarim_5.jpg",
          "Hecarim_6.jpg",
          "Hecarim_7.jpg",
          "Hecarim_8.jpg",
          "Hecarim_14.jpg",
          "Hecarim_22.jpg",
          "Hecarim_31.jpg",
        ],
      };
    case "Heimerdinger":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0074/ability_0074_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0074/ability_0074_Q1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0074/ability_0074_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0074/ability_0074_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0074/ability_0074_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0074/ability_0074_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0074/ability_0074_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0074/ability_0074_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0074/ability_0074_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0074/ability_0074_R1.webm",
          },
        ],
        skinPath: [
          "Heimerdinger_0.jpg",
          "Heimerdinger_1.jpg",
          "Heimerdinger_2.jpg",
          "Heimerdinger_3.jpg",
          "Heimerdinger_4.jpg",
          "Heimerdinger_5.jpg",
          "Heimerdinger_6.jpg",
          "Heimerdinger_15.jpg",
          "Heimerdinger_24.jpg",
        ],
      };
    case "Hwei":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hwei_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0910/ability_0910_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0910/ability_0910_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0910/ability_0910_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0910/ability_0910_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0910/ability_0910_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0910/ability_0910_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0910/ability_0910_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0910/ability_0910_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0910/ability_0910_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0910/ability_0910_R1.webm",
          },
        ],
        skinPath: ["Hwei_0.jpg", "Hwei_1.jpg"],
      };
    case "Illaoi":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_R1.webm",
          },
        ],
        skinPath: [
          "Illaoi_0.jpg",
          "Illaoi_1.jpg",
          "Illaoi_2.jpg",
          "Illaoi_10.jpg",
          "Illaoi_18.jpg",
          "Illaoi_27.jpg",
        ],
      };
    case "Irelia":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_R1.webm",
          },
        ],
        skinPath: [
          "Irelia_0.jpg",
          "Irelia_1.jpg",
          "Irelia_2.jpg",
          "Irelia_3.jpg",
          "Irelia_4.jpg",
          "Irelia_5.jpg",
          "Irelia_6.jpg",
          "Irelia_15.jpg",
          "Irelia_16.jpg",
          "Irelia_17.jpg",
          "Irelia_18.jpg",
          "Irelia_26.jpg",
          "Irelia_36.jpg",
          "Irelia_37.jpg",
          "Irelia_45.jpg",
        ],
      };
    case "Ivern":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_R1.webm",
          },
        ],
        skinPath: [
          "Ivern_0.jpg",
          "Ivern_1.jpg",
          "Ivern_2.jpg",
          "Ivern_11.jpg",
          "Ivern_20.jpg",
        ],
      };
    case "Janna":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_R1.webm",
          },
        ],
        skinPath: [
          "Janna_0.jpg",
          "Janna_1.jpg",
          "Janna_2.jpg",
          "Janna_3.jpg",
          "Janna_4.jpg",
          "Janna_5.jpg",
          "Janna_6.jpg",
          "Janna_7.jpg",
          "Janna_8.jpg",
          "Janna_13.jpg",
          "Janna_20.jpg",
          "Janna_27.jpg",
          "Janna_36.jpg",
          "Janna_45.jpg",
          "Janna_46.jpg",
          "Janna_56.jpg",
        ],
      };
    case "Jarvan IV":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_R1.webm",
          },
        ],
        skinPath: [
          "JarvanIV_0.jpg",
          "JarvanIV_1.jpg",
          "JarvanIV_2.jpg",
          "JarvanIV_3.jpg",
          "JarvanIV_4.jpg",
          "JarvanIV_5.jpg",
          "JarvanIV_6.jpg",
          "JarvanIV_7.jpg",
          "JarvanIV_8.jpg",
          "JarvanIV_9.jpg",
          "JarvanIV_11.jpg",
          "JarvanIV_21.jpg",
          "JarvanIV_30.jpg",
          "JarvanIV_35.jpg",
        ],
      };
    case "Jax":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_R1.webm",
          },
        ],
        skinPath: [
          "Jax_0.jpg",
          "Jax_1.jpg",
          "Jax_2.jpg",
          "Jax_3.jpg",
          "Jax_4.jpg",
          "Jax_5.jpg",
          "Jax_6.jpg",
          "Jax_7.jpg",
          "Jax_8.jpg",
          "Jax_12.jpg",
          "Jax_13.jpg",
          "Jax_14.jpg",
          "Jax_20.jpg",
          "Jax_21.jpg",
          "Jax_22.jpg",
          "Jax_32.jpg",
          "Jax_33.jpg",
        ],
      };
    case "Jayce":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_R1.webm",
          },
        ],
        skinPath: [
          "Jayce_0.jpg",
          "Jayce_1.jpg",
          "Jayce_2.jpg",
          "Jayce_3.jpg",
          "Jayce_4.jpg",
          "Jayce_5.jpg",
          "Jayce_15.jpg",
          "Jayce_24.jpg",
          "Jayce_25.jpg",
          "Jayce_34.jpg",
          "Jayce_36.jpg",
        ],
      };
    case "Jhin":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/rolemarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_R1.webm",
          },
        ],
        skinPath: [
          "Jhin_0.jpg",
          "Jhin_1.jpg",
          "Jhin_2.jpg",
          "Jhin_3.jpg",
          "Jhin_4.jpg",
          "Jhin_5.jpg",
          "Jhin_14.jpg",
          "Jhin_23.jpg",
          "Jhin_25.jpg",
          "Jhin_36.jpg",
          "Jhin_37.jpg",
        ],
      };
    case "Jinx":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/rolemarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_R1.webm",
          },
        ],
        skinPath: [
          "Jinx_0.jpg",
          "Jinx_1.jpg",
          "Jinx_2.jpg",
          "Jinx_3.jpg",
          "Jinx_4.jpg",
          "Jinx_12.jpg",
          "Jinx_13.jpg",
          "Jinx_20.jpg",
          "Jinx_29.jpg",
          "Jinx_37.jpg",
          "Jinx_38.jpg",
          "Jinx_40.jpg",
          "Jinx_51.jpg",
          "Jinx_62.jpg",
        ],
      };
    case "Kai'Sa":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/rolemarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_R1.webm",
          },
        ],
        skinPath: [
          "Kaisa_0.jpg",
          "Kaisa_14.jpg",
          "Kaisa_15.jpg",
          "Kaisa_16.jpg",
          "Kaisa_17.jpg",
          "Kaisa_26.jpg",
          "Kaisa_27.jpg",
          "Kaisa_29.jpg",
          "Kaisa_39.jpg",
          "Kaisa_40.jpg",
          "Kaisa_48.jpg",
          "Kaisa_59.jpg",
        ],
      };
    case "Kalista":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/rolemarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_R1.webm",
          },
        ],
        skinPath: [
          "Kalista_0.jpg",
          "Kalista_1.jpg",
          "Kalista_2.jpg",
          "Kalista_3.jpg",
          "Kalista_5.jpg",
          "Kalista_14.jpg",
        ],
      };
    case "Karma":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0043/ability_0043_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0043/ability_0043_Q1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0043/ability_0043_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0043/ability_0043_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0043/ability_0043_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0043/ability_0043_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0043/ability_0043_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0043/ability_0043_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0043/ability_0043_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0043/ability_0043_R1.webm",
          },
        ],
        skinPath: [
          "Karma_0.jpg",
          "Karma_1.jpg",
          "Karma_2.jpg",
          "Karma_3.jpg",
          "Karma_4.jpg",
          "Karma_5.jpg",
          "Karma_6.jpg",
          "Karma_7.jpg",
          "Karma_8.jpg",
          "Karma_19.jpg",
          "Karma_26.jpg",
          "Karma_27.jpg",
          "Karma_44.jpg",
          "Karma_54.jpg",
          "Karma_61.jpg",
        ],
      };
    case "Karthus":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_R1.webm",
          },
        ],
        skinPath: [
          "Karthus_0.jpg",
          "Karthus_1.jpg",
          "Karthus_2.jpg",
          "Karthus_3.jpg",
          "Karthus_4.jpg",
          "Karthus_5.jpg",
          "Karthus_9.jpg",
          "Karthus_10.jpg",
          "Karthus_17.jpg",
          "Karthus_26.jpg",
        ],
      };
    case "Kassadin":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0038/ability_0038_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0038/ability_0038_Q1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0038/ability_0038_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0038/ability_0038_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0038/ability_0038_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0038/ability_0038_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0038/ability_0038_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0038/ability_0038_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0038/ability_0038_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0038/ability_0038_R1.webm",
          },
        ],
        skinPath: [
          "Kassadin_0.jpg",
          "Kassadin_1.jpg",
          "Kassadin_2.jpg",
          "Kassadin_3.jpg",
          "Kassadin_4.jpg",
          "Kassadin_5.jpg",
          "Kassadin_6.jpg",
          "Kassadin_14.jpg",
          "Kassadin_15.jpg",
          "Kassadin_24.jpg",
        ],
      };
    case "Katarina":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_R1.webm",
          },
        ],
        skinPath: [
          "Katarina_0.jpg",
          "Katarina_1.jpg",
          "Katarina_2.jpg",
          "Katarina_3.jpg",
          "Katarina_4.jpg",
          "Katarina_5.jpg",
          "Katarina_6.jpg",
          "Katarina_7.jpg",
          "Katarina_8.jpg",
          "Katarina_9.jpg",
          "Katarina_10.jpg",
          "Katarina_12.jpg",
          "Katarina_21.jpg",
          "Katarina_29.jpg",
          "Katarina_37.jpg",
          "Katarina_47.jpg",
          "Katarina_48.jpg",
        ],
      };
    case "Kayle":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_Q1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_R1.webm",
          },
        ],
        skinPath: [
          "Kayle_0.jpg",
          "Kayle_1.jpg",
          "Kayle_2.jpg",
          "Kayle_3.jpg",
          "Kayle_4.jpg",
          "Kayle_5.jpg",
          "Kayle_6.jpg",
          "Kayle_7.jpg",
          "Kayle_8.jpg",
          "Kayle_9.jpg",
          "Kayle_15.jpg",
          "Kayle_24.jpg",
          "Kayle_33.jpg",
          "Kayle_42.jpg",
          "Kayle_57.jpg",
          "Kayle_66.jpg",
          "Kayle_67.jpg",
        ],
      };
    case "Kayn":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_R1.webm",
          },
        ],
        skinPath: [
          "Kayn_0.jpg",
          "Kayn_1.jpg",
          "Kayn_2.jpg",
          "Kayn_8.jpg",
          "Kayn_9.jpg",
          "Kayn_15.jpg",
          "Kayn_20.jpg",
        ],
      };
    case "Kennen":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_R1.webm",
          },
        ],
        skinPath: [
          "Kennen_0.jpg",
          "Kennen_1.jpg",
          "Kennen_2.jpg",
          "Kennen_3.jpg",
          "Kennen_4.jpg",
          "Kennen_5.jpg",
          "Kennen_6.jpg",
          "Kennen_7.jpg",
          "Kennen_8.jpg",
          "Kennen_23.jpg",
          "Kennen_25.jpg",
        ],
      };
    case "Kha'Zix":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_R1.webm",
          },
        ],
        skinPath: [
          "Khazix_0.jpg",
          "Khazix_1.jpg",
          "Khazix_2.jpg",
          "Khazix_3.jpg",
          "Khazix_4.jpg",
          "Khazix_11.jpg",
          "Khazix_60.jpg",
          "Khazix_69.jpg",
          "Khazix_79.jpg",
        ],
      };
    case "Kindred":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_R1.webm",
          },
        ],
        skinPath: [
          "Kindred_0.jpg",
          "Kindred_1.jpg",
          "Kindred_2.jpg",
          "Kindred_3.jpg",
          "Kindred_12.jpg",
          "Kindred_22.jpg",
          "Kindred_23.jpg",
          "Kindred_33.jpg",
        ],
      };
    case "Kled":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_R1.webm",
          },
        ],
        skinPath: [
          "Kled_0.jpg",
          "Kled_1.jpg",
          "Kled_2.jpg",
          "Kled_9.jpg",
          "Kled_18.jpg",
        ],
      };
    case "Kog'Maw":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_R1.webm",
          },
        ],
        skinPath: [
          "KogMaw_0.jpg",
          "KogMaw_1.jpg",
          "KogMaw_2.jpg",
          "KogMaw_3.jpg",
          "KogMaw_4.jpg",
          "KogMaw_5.jpg",
          "KogMaw_6.jpg",
          "KogMaw_7.jpg",
          "KogMaw_8.jpg",
          "KogMaw_9.jpg",
          "KogMaw_10.jpg",
          "KogMaw_19.jpg",
          "KogMaw_28.jpg",
          "KogMaw_37.jpg",
          "KogMaw_46.jpg",
          "KogMaw_55.jpg",
        ],
      };
    case "K'Sante":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KSante_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_R1.webm",
          },
        ],
        skinPath: [
          "KSante_0.jpg",
          "KSante_1.jpg",
          "KSante_2.jpg",
          "KSante_8.jpg",
        ],
      };
    case "LeBlanc":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_R1.webm",
          },
        ],
        skinPath: [
          "Leblanc_0.jpg",
          "Leblanc_1.jpg",
          "Leblanc_2.jpg",
          "Leblanc_3.jpg",
          "Leblanc_4.jpg",
          "Leblanc_5.jpg",
          "Leblanc_12.jpg",
          "Leblanc_19.jpg",
          "Leblanc_20.jpg",
          "Leblanc_29.jpg",
          "Leblanc_33.jpg",
          "Leblanc_35.jpg",
          "Leblanc_45.jpg",
          "Leblanc_55.jpg",
        ],
      };
    case "Lee Sin":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_R1.webm",
          },
        ],
        skinPath: [
          "LeeSin_0.jpg",
          "LeeSin_1.jpg",
          "LeeSin_2.jpg",
          "LeeSin_3.jpg",
          "LeeSin_4.jpg",
          "LeeSin_5.jpg",
          "LeeSin_6.jpg",
          "LeeSin_10.jpg",
          "LeeSin_11.jpg",
          "LeeSin_12.jpg",
          "LeeSin_27.jpg",
          "LeeSin_28.jpg",
          "LeeSin_29.jpg",
          "LeeSin_31.jpg",
          "LeeSin_39.jpg",
          "LeeSin_41.jpg",
          "LeeSin_51.jpg",
          "LeeSin_52.jpg",
          "LeeSin_68.jpg",
        ],
      };
    case "Leona":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_R1.webm",
          },
        ],
        skinPath: [
          "Leona_0.jpg",
          "Leona_1.jpg",
          "Leona_2.jpg",
          "Leona_3.jpg",
          "Leona_4.jpg",
          "Leona_8.jpg",
          "Leona_9.jpg",
          "Leona_10.jpg",
          "Leona_11.jpg",
          "Leona_12.jpg",
          "Leona_21.jpg",
          "Leona_22.jpg",
          "Leona_23.jpg",
          "Leona_33.jpg",
          "Leona_34.jpg",
          "Leona_50.jpg",
          "Leona_52.jpg",
          "Leona_53.jpg",
        ],
      };
    case "Lillia":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_R1.webm",
          },
        ],
        skinPath: [
          "Lillia_0.jpg",
          "Lillia_1.jpg",
          "Lillia_10.jpg",
          "Lillia_19.jpg",
          "Lillia_28.jpg",
        ],
      };
    case "Lissandra":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_R1.webm",
          },
        ],
        skinPath: [
          "Lissandra_0.jpg",
          "Lissandra_1.jpg",
          "Lissandra_2.jpg",
          "Lissandra_3.jpg",
          "Lissandra_4.jpg",
          "Lissandra_12.jpg",
          "Lissandra_23.jpg",
          "Lissandra_33.jpg",
          "Lissandra_34.jpg",
        ],
      };
    case "Lucian":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_R1.webm",
          },
        ],
        skinPath: [
          "Lucian_0.jpg",
          "Lucian_1.jpg",
          "Lucian_2.jpg",
          "Lucian_6.jpg",
          "Lucian_7.jpg",
          "Lucian_8.jpg",
          "Lucian_9.jpg",
          "Lucian_18.jpg",
          "Lucian_19.jpg",
          "Lucian_25.jpg",
          "Lucian_31.jpg",
          "Lucian_40.jpg",
          "Lucian_52.jpg",
        ],
      };
    case "Lulu":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_R1.webm",
          },
        ],
        skinPath: [
          "Lulu_0.jpg",
          "Lulu_1.jpg",
          "Lulu_2.jpg",
          "Lulu_3.jpg",
          "Lulu_4.jpg",
          "Lulu_5.jpg",
          "Lulu_6.jpg",
          "Lulu_14.jpg",
          "Lulu_15.jpg",
          "Lulu_26.jpg",
          "Lulu_27.jpg",
          "Lulu_37.jpg",
          "Lulu_46.jpg",
        ],
      };
    case "Lux":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_R1.webm",
          },
        ],
        skinPath: [
          "Lux_0.jpg",
          "Lux_1.jpg",
          "Lux_2.jpg",
          "Lux_3.jpg",
          "Lux_4.jpg",
          "Lux_5.jpg",
          "Lux_6.jpg",
          "Lux_7.jpg",
          "Lux_8.jpg",
          "Lux_14.jpg",
          "Lux_15.jpg",
          "Lux_16.jpg",
          "Lux_17.jpg",
          "Lux_18.jpg",
          "Lux_19.jpg",
          "Lux_29.jpg",
          "Lux_38.jpg",
          "Lux_39.jpg",
          "Lux_30.jpg",
          "Lux_42.jpg",
          "Lux_61.jpg",
        ],
      };
    case "Malphite":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_R1.webm",
          },
        ],
        skinPath: [
          "Malphite_0.jpg",
          "Malphite_1.jpg",
          "Malphite_2.jpg",
          "Malphite_3.jpg",
          "Malphite_4.jpg",
          "Malphite_5.jpg",
          "Malphite_6.jpg",
          "Malphite_7.jpg",
          "Malphite_16.jpg",
          "Malphite_23.jpg",
          "Malphite_24.jpg",
          "Malphite_25.jpg",
          "Malphite_27.jpg",
          "Malphite_37.jpg",
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
