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
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_P1.webm",
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
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_Q1.webm",
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
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_Q1.webm",
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
