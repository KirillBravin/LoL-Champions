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
    case "Malzahar":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_R1.webm",
          },
        ],
        skinPath: [
          "Malzahar_0.jpg",
          "Malzahar_1.jpg",
          "Malzahar_2.jpg",
          "Malzahar_3.jpg",
          "Malzahar_4.jpg",
          "Malzahar_5.jpg",
          "Malzahar_6.jpg",
          "Malzahar_7.jpg",
          "Malzahar_9.jpg",
          "Malzahar_18.jpg",
          "Malzahar_28.jpg",
          "Malzahar_38.jpg",
          "Malzahar_39.jpg",
        ],
      };
    case "Maokai":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_R1.webm",
          },
        ],
        skinPath: [
          "Maokai_0.jpg",
          "Maokai_1.jpg",
          "Maokai_2.jpg",
          "Maokai_3.jpg",
          "Maokai_4.jpg",
          "Maokai_5.jpg",
          "Maokai_6.jpg",
          "Maokai_7.jpg",
          "Maokai_16.jpg",
          "Maokai_24.jpg",
          "Maokai_33.jpg",
        ],
      };
    case "Master Yi":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_R1.webm",
          },
        ],
        skinPath: [
          "MasterYi_0.jpg",
          "MasterYi_1.jpg",
          "MasterYi_2.jpg",
          "MasterYi_3.jpg",
          "MasterYi_4.jpg",
          "MasterYi_5.jpg",
          "MasterYi_9.jpg",
          "MasterYi_10.jpg",
          "MasterYi_11.jpg",
          "MasterYi_17.jpg",
          "MasterYi_24.jpg",
          "MasterYi_33.jpg",
          "MasterYi_42.jpg",
          "MasterYi_52.jpg",
          "MasterYi_53.jpg",
          "MasterYi_89.jpg",
          "MasterYi_96.jpg",
        ],
      };
    case "Milio":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Milio_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0902/ability_0902_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0902/ability_0902_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0902/ability_0902_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0902/ability_0902_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0902/ability_0902_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0902/ability_0902_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0902/ability_0902_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0902/ability_0902_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0902/ability_0902_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0902/ability_0902_R1.webm",
          },
        ],
        skinPath: ["Milio_0.jpg", "Milio_1.jpg", "Milio_11.jpg"],
      };
    case "Miss Fortune":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_R1.webm",
          },
        ],
        skinPath: [
          "MissFortune_0.jpg",
          "MissFortune_1.jpg",
          "MissFortune_2.jpg",
          "MissFortune_3.jpg",
          "MissFortune_4.jpg",
          "MissFortune_5.jpg",
          "MissFortune_6.jpg",
          "MissFortune_7.jpg",
          "MissFortune_8.jpg",
          "MissFortune_9.jpg",
          "MissFortune_15.jpg",
          "MissFortune_16.jpg",
          "MissFortune_17.jpg",
          "MissFortune_18.jpg",
          "MissFortune_20.jpg",
          "MissFortune_21.jpg",
          "MissFortune_31.jpg",
          "MissFortune_32.jpg",
          "MissFortune_33.jpg",
          "MissFortune_40.jpg",
          "MissFortune_41.jpg",
          "MissFortune_50.jpg",
          "MissFortune_60.jpg",
        ],
      };
    case "Wukong":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0062/ability_0062_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0062/ability_0062_Q1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0062/ability_0062_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0062/ability_0062_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0062/ability_0062_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0062/ability_0062_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0062/ability_0062_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0062/ability_0062_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0062/ability_0062_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0062/ability_0062_R1.webm",
          },
        ],
        skinPath: [
          "MonkeyKing_0.jpg",
          "MonkeyKing_1.jpg",
          "MonkeyKing_2.jpg",
          "MonkeyKing_3.jpg",
          "MonkeyKing_4.jpg",
          "MonkeyKing_5.jpg",
          "MonkeyKing_6.jpg",
          "MonkeyKing_7.jpg",
          "MonkeyKing_16.jpg",
        ],
      };
    case "Mordekaiser":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_R1.webm",
          },
        ],
        skinPath: [
          "Mordekaiser_0.jpg",
          "Mordekaiser_1.jpg",
          "Mordekaiser_2.jpg",
          "Mordekaiser_3.jpg",
          "Mordekaiser_4.jpg",
          "Mordekaiser_5.jpg",
          "Mordekaiser_6.jpg",
          "Mordekaiser_13.jpg",
          "Mordekaiser_23.jpg",
          "Mordekaiser_32.jpg",
          "Mordekaiser_42.jpg",
          "Mordekaiser_44.jpg",
        ],
      };
    case "Morgana":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_Q1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_R1.webm",
          },
        ],
        skinPath: [
          "Morgana_0.jpg",
          "Morgana_1.jpg",
          "Morgana_2.jpg",
          "Morgana_3.jpg",
          "Morgana_4.jpg",
          "Morgana_5.jpg",
          "Morgana_6.jpg",
          "Morgana_10.jpg",
          "Morgana_11.jpg",
          "Morgana_17.jpg",
          "Morgana_26.jpg",
          "Morgana_39.jpg",
          "Morgana_41.jpg",
          "Morgana_50.jpg",
          "Morgana_60.jpg",
          "Morgana_70.jpg",
        ],
      };
    case "Naafiri":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Naafiri_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0950/ability_0950_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0950/ability_0950_Q1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0950/ability_0950_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0950/ability_0950_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0950/ability_0950_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0950/ability_0950_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0950/ability_0950_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0950/ability_0950_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0950/ability_0950_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0950/ability_0950_R1.webm",
          },
        ],
        skinPath: ["Naafiri_0.jpg", "Naafiri_1.jpg", "Naafiri_11.jpg"],
      };
    case "Nami":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_Q1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_R1.webm",
          },
        ],
        skinPath: [
          "Nami_0.jpg",
          "Nami_1.jpg",
          "Nami_2.jpg",
          "Nami_3.jpg",
          "Nami_7.jpg",
          "Nami_8.jpg",
          "Nami_9.jpg",
          "Nami_15.jpg",
          "Nami_24.jpg",
          "Nami_32.jpg",
          "Nami_41.jpg",
          "Nami_42.jpg",
          "Nami_51.jpg",
        ],
      };
    case "Nasus":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_R1.webm",
          },
        ],
        skinPath: [
          "Nasus_0.jpg",
          "Nasus_1.jpg",
          "Nasus_2.jpg",
          "Nasus_3.jpg",
          "Nasus_4.jpg",
          "Nasus_5.jpg",
          "Nasus_6.jpg",
          "Nasus_10.jpg",
          "Nasus_11.jpg",
          "Nasus_16.jpg",
          "Nasus_25.jpg",
          "Nasus_35.jpg",
          "Nasus_45.jpg",
        ],
      };
    case "Nautilus":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_R1.webm",
          },
        ],
        skinPath: [
          "Nautilus_0.jpg",
          "Nautilus_1.jpg",
          "Nautilus_2.jpg",
          "Nautilus_3.jpg",
          "Nautilus_4.jpg",
          "Nautilus_5.jpg",
          "Nautilus_6.jpg",
          "Nautilus_9.jpg",
          "Nautilus_18.jpg",
          "Nautilus_27.jpg",
          "Nautilus_36.jpg",
        ],
      };
    case "Neeko":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_R1.webm",
          },
        ],
        skinPath: [
          "Neeko_0.jpg",
          "Neeko_1.jpg",
          "Neeko_10.jpg",
          "Neeko_11.jpg",
          "Neeko_12.jpg",
          "Neeko_21.jpg",
          "Neeko_22.jpg",
          "Neeko_31.jpg",
        ],
      };
    case "Nidalee":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_R1.webm",
          },
        ],
        skinPath: [
          "Nidalee_0.jpg",
          "Nidalee_1.jpg",
          "Nidalee_2.jpg",
          "Nidalee_3.jpg",
          "Nidalee_4.jpg",
          "Nidalee_5.jpg",
          "Nidalee_6.jpg",
          "Nidalee_7.jpg",
          "Nidalee_8.jpg",
          "Nidalee_9.jpg",
          "Nidalee_11.jpg",
          "Nidalee_18.jpg",
          "Nidalee_27.jpg",
          "Nidalee_29.jpg",
          "Nidalee_39.jpg",
          "Nidalee_48.jpg",
        ],
      };
    case "Nilah":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_R1.webm",
          },
        ],
        skinPath: ["Nilah_0.jpg", "Nilah_1.jpg", "Nilah_11.jpg"],
      };
    case "Nocturne":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_R1.webm",
          },
        ],
        skinPath: [
          "Nocturne_0.jpg",
          "Nocturne_1.jpg",
          "Nocturne_2.jpg",
          "Nocturne_3.jpg",
          "Nocturne_4.jpg",
          "Nocturne_5.jpg",
          "Nocturne_6.jpg",
          "Nocturne_7.jpg",
          "Nocturne_16.jpg",
          "Nocturne_17.jpg",
          "Nocturne_26.jpg",
        ],
      };
    case "Nunu & Willump":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_R1.webm",
          },
        ],
        skinPath: [
          "Nunu_0.jpg",
          "Nunu_1.jpg",
          "Nunu_2.jpg",
          "Nunu_3.jpg",
          "Nunu_4.jpg",
          "Nunu_5.jpg",
          "Nunu_6.jpg",
          "Nunu_7.jpg",
          "Nunu_8.jpg",
          "Nunu_16.jpg",
          "Nunu_26.jpg",
          "Nunu_35.jpg",
          "Nunu_44.jpg",
        ],
      };
    case "Olaf":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_R1.webm",
          },
        ],
        skinPath: [
          "Olaf_0.jpg",
          "Olaf_1.jpg",
          "Olaf_2.jpg",
          "Olaf_3.jpg",
          "Olaf_4.jpg",
          "Olaf_5.jpg",
          "Olaf_6.jpg",
          "Olaf_15.jpg",
          "Olaf_16.jpg",
          "Olaf_25.jpg",
          "Olaf_35.jpg",
          "Olaf_44.jpg",
        ],
      };
    case "Orianna":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_R1.webm",
          },
        ],
        skinPath: [
          "Orianna_0.jpg",
          "Orianna_1.jpg",
          "Orianna_2.jpg",
          "Orianna_3.jpg",
          "Orianna_4.jpg",
          "Orianna_5.jpg",
          "Orianna_6.jpg",
          "Orianna_7.jpg",
          "Orianna_8.jpg",
          "Orianna_11.jpg",
          "Orianna_20.jpg",
          "Orianna_29.jpg",
          "Orianna_38.jpg",
        ],
      };
    case "Ornn":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_R1.webm",
          },
        ],
        skinPath: [
          "Ornn_0.jpg",
          "Ornn_1.jpg",
          "Ornn_2.jpg",
          "Ornn_11.jpg",
          "Ornn_20.jpg",
        ],
      };
    case "Pantheon":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_R1.webm",
          },
        ],
        skinPath: [
          "Pantheon_0.jpg",
          "Pantheon_1.jpg",
          "Pantheon_2.jpg",
          "Pantheon_3.jpg",
          "Pantheon_4.jpg",
          "Pantheon_5.jpg",
          "Pantheon_6.jpg",
          "Pantheon_7.jpg",
          "Pantheon_8.jpg",
          "Pantheon_16.jpg",
          "Pantheon_25.jpg",
          "Pantheon_26.jpg",
          "Pantheon_36.jpg",
        ],
      };
    case "Poppy":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_P1.mp4",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_R1.webm",
          },
        ],
        skinPath: [
          "Poppy_0.jpg",
          "Poppy_1.jpg",
          "Poppy_2.jpg",
          "Poppy_3.jpg",
          "Poppy_4.jpg",
          "Poppy_5.jpg",
          "Poppy_6.jpg",
          "Poppy_7.jpg",
          "Poppy_14.jpg",
          "Poppy_15.jpg",
          "Poppy_16.jpg",
          "Poppy_24.jpg",
          "Poppy_33.jpg",
        ],
      };
    case "Pyke":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_R1.webm",
          },
        ],
        skinPath: [
          "Pyke_0.jpg",
          "Pyke_1.jpg",
          "Pyke_9.jpg",
          "Pyke_16.jpg",
          "Pyke_25.jpg",
          "Pyke_34.jpg",
          "Pyke_44.jpg",
          "Pyke_45.jpg",
          "Pyke_53.jpg",
          "Pyke_54.jpg",
          "Pyke_64.jpg",
        ],
      };
    case "Qiyana":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_R1.webm",
          },
        ],
        skinPath: [
          "Qiyana_0.jpg",
          "Qiyana_1.jpg",
          "Qiyana_2.jpg",
          "Qiyana_10.jpg",
          "Qiyana_11.jpg",
          "Qiyana_20.jpg",
          "Qiyana_21.jpg",
          "Qiyana_30.jpg",
          "Qiyana_40.jpg",
        ],
      };
    case "Quinn":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_R1.webm",
          },
        ],
        skinPath: [
          "Quinn_0.jpg",
          "Quinn_1.jpg",
          "Quinn_2.jpg",
          "Quinn_3.jpg",
          "Quinn_4.jpg",
          "Quinn_5.jpg",
          "Quinn_14.jpg",
        ],
      };
    case "Rakan":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_R1.webm",
          },
        ],
        skinPath: [
          "Rakan_0.jpg",
          "Rakan_1.jpg",
          "Rakan_2.jpg",
          "Rakan_3.jpg",
          "Rakan_4.jpg",
          "Rakan_5.jpg",
          "Rakan_9.jpg",
          "Rakan_18.jpg",
          "Rakan_27.jpg",
          "Rakan_36.jpg",
          "Rakan_37.jpg",
          "Rakan_38.jpg",
        ],
      };
    case "Rammus":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0033/ability_0033_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0033/ability_0033_Q1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0033/ability_0033_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0033/ability_0033_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0033/ability_0033_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0033/ability_0033_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0033/ability_0033_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0033/ability_0033_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0033/ability_0033_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0033/ability_0033_R1.webm",
          },
        ],
        skinPath: [
          "Rammus_0.jpg",
          "Rammus_1.jpg",
          "Rammus_2.jpg",
          "Rammus_3.jpg",
          "Rammus_4.jpg",
          "Rammus_5.jpg",
          "Rammus_6.jpg",
          "Rammus_7.jpg",
          "Rammus_8.jpg",
          "Rammus_16.jpg",
          "Rammus_17.jpg",
          "Rammus_26.jpg",
        ],
      };
    case "Rek'Sai":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0421/ability_0421_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0421/ability_0421_Q1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0421/ability_0421_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0421/ability_0421_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0421/ability_0421_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0421/ability_0421_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0421/ability_0421_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0421/ability_0421_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0421/ability_0421_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0421/ability_0421_R1.webm",
          },
        ],
        skinPath: [
          "RekSai_0.jpg",
          "RekSai_1.jpg",
          "RekSai_2.jpg",
          "RekSai_9.jpg",
          "RekSai_17.jpg",
          "RekSai_26.jpg",
        ],
      };
    case "Rell":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_R1.webm",
          },
        ],
        skinPath: ["Rell_0.jpg", "Rell_1.jpg", "Rell_10.jpg", "Rell_20.jpg"],
      };
    case "Renata Glasc":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renata_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_R1.webm",
          },
        ],
        skinPath: [
          "Renata_0.jpg",
          "Renata_1.jpg",
          "Renata_10.jpg",
          "Renata_20.jpg",
          "Renata_21.jpg",
        ],
      };
    case "Renekton":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_R1.webm",
          },
        ],
        skinPath: [
          "Renekton_0.jpg",
          "Renekton_1.jpg",
          "Renekton_2.jpg",
          "Renekton_3.jpg",
          "Renekton_4.jpg",
          "Renekton_5.jpg",
          "Renekton_6.jpg",
          "Renekton_7.jpg",
          "Renekton_8.jpg",
          "Renekton_9.jpg",
          "Renekton_17.jpg",
          "Renekton_18.jpg",
          "Renekton_26.jpg",
          "Renekton_33.jpg",
          "Renekton_42.jpg",
        ],
      };
    case "Rengar":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_R1.webm",
          },
        ],
        skinPath: [
          "Rengar_0.jpg",
          "Rengar_1.jpg",
          "Rengar_2.jpg",
          "Rengar_3.jpg",
          "Rengar_8.jpg",
          "Rengar_15.jpg",
          "Rengar_23.jpg",
          "Rengar_30.jpg",
          "Rengar_40.jpg",
        ],
      };
    case "Riven":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_R1.webm",
          },
        ],
        skinPath: [
          "Riven_0.jpg",
          "Riven_1.jpg",
          "Riven_2.jpg",
          "Riven_3.jpg",
          "Riven_4.jpg",
          "Riven_5.jpg",
          "Riven_6.jpg",
          "Riven_7.jpg",
          "Riven_16.jpg",
          "Riven_18.jpg",
          "Riven_20.jpg",
          "Riven_22.jpg",
          "Riven_23.jpg",
          "Riven_34.jpg",
          "Riven_44.jpg",
          "Riven_45.jpg",
          "Riven_55.jpg",
          "Riven_63.jpg",
        ],
      };
    case "Rumble":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_R1.webm",
          },
        ],
        skinPath: [
          "Rumble_0.jpg",
          "Rumble_1.jpg",
          "Rumble_2.jpg",
          "Rumble_3.jpg",
          "Rumble_4.jpg",
          "Rumble_13.jpg",
          "Rumble_23.jpg",
        ],
      };
    case "Ryze":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0013/ability_0013_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0013/ability_0013_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0013/ability_0013_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0013/ability_0013_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0013/ability_0013_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0013/ability_0013_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0013/ability_0013_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0013/ability_0013_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0013/ability_0013_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0013/ability_0013_R1.webm",
          },
        ],
        skinPath: [
          "Ryze_0.jpg",
          "Ryze_1.jpg",
          "Ryze_2.jpg",
          "Ryze_3.jpg",
          "Ryze_4.jpg",
          "Ryze_5.jpg",
          "Ryze_6.jpg",
          "Ryze_7.jpg",
          "Ryze_8.jpg",
          "Ryze_9.jpg",
          "Ryze_10.jpg",
          "Ryze_11.jpg",
          "Ryze_13.jpg",
          "Ryze_20.jpg",
        ],
      };
    case "Samira":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_R1.webm",
          },
        ],
        skinPath: [
          "Samira_0.jpg",
          "Samira_1.jpg",
          "Samira_10.jpg",
          "Samira_20.jpg",
          "Samira_30.jpg",
        ],
      };
    case "Sejuani":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_R1.webm",
          },
        ],
        skinPath: [
          "Sejuani_0.jpg",
          "Sejuani_1.jpg",
          "Sejuani_2.jpg",
          "Sejuani_3.jpg",
          "Sejuani_4.jpg",
          "Sejuani_5.jpg",
          "Sejuani_6.jpg",
          "Sejuani_7.jpg",
          "Sejuani_8.jpg",
          "Sejuani_15.jpg",
          "Sejuani_16.jpg",
          "Sejuani_26.jpg",
          "Sejuani_36.jpg",
        ],
      };
    case "Senna":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_R1.webm",
          },
        ],
        skinPath: [
          "Senna_0.jpg",
          "Senna_1.jpg",
          "Senna_9.jpg",
          "Senna_10.jpg",
          "Senna_16.jpg",
          "Senna_26.jpg",
          "Senna_27.jpg",
          "Senna_36.jpg",
          "Senna_46.jpg",
          "Senna_56.jpg",
        ],
      };
    case "Seraphine":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_R1.webm",
          },
        ],
        skinPath: [
          "Seraphine_0.jpg",
          "Seraphine_1.jpg",
          "Seraphine_2.jpg",
          "Seraphine_3.jpg",
          "Seraphine_4.jpg",
          "Seraphine_14.jpg",
          "Seraphine_15.jpg",
          "Seraphine_24.jpg",
          "Seraphine_34.jpg",
          "Seraphine_43.jpg",
        ],
      };
    case "Sett":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_R1.webm",
          },
        ],
        skinPath: [
          "Sett_0.jpg",
          "Sett_1.jpg",
          "Sett_8.jpg",
          "Sett_9.jpg",
          "Sett_10.jpg",
          "Sett_19.jpg",
          "Sett_38.jpg",
          "Sett_45.jpg",
          "Sett_56.jpg",
        ],
      };
    case "Shaco":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_R1.webm",
          },
        ],
        skinPath: [
          "Shaco_0.jpg",
          "Shaco_1.jpg",
          "Shaco_2.jpg",
          "Shaco_3.jpg",
          "Shaco_4.jpg",
          "Shaco_5.jpg",
          "Shaco_6.jpg",
          "Shaco_7.jpg",
          "Shaco_8.jpg",
          "Shaco_15.jpg",
          "Shaco_23.jpg",
          "Shaco_33.jpg",
          "Shaco_43.jpg",
          "Shaco_44.jpg",
          "Shaco_54.jpg",
        ],
      };
    case "Shen":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_R1.webm",
          },
        ],
        skinPath: [
          "Shen_0.jpg",
          "Shen_1.jpg",
          "Shen_2.jpg",
          "Shen_3.jpg",
          "Shen_4.jpg",
          "Shen_5.jpg",
          "Shen_6.jpg",
          "Shen_15.jpg",
          "Shen_16.jpg",
          "Shen_22.jpg",
          "Shen_40.jpg",
          "Shen_49.jpg",
        ],
      };
    case "Shyvana":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0102/ability_0102_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0102/ability_0102_Q1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0102/ability_0102_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0102/ability_0102_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0102/ability_0102_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0102/ability_0102_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0102/ability_0102_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0102/ability_0102_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0102/ability_0102_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0102/ability_0102_R1.webm",
          },
        ],
        skinPath: [
          "Shyvana_0.jpg",
          "Shyvana_1.jpg",
          "Shyvana_2.jpg",
          "Shyvana_3.jpg",
          "Shyvana_4.jpg",
          "Shyvana_5.jpg",
          "Shyvana_6.jpg",
          "Shyvana_8.jpg",
          "Shyvana_17.jpg",
        ],
      };
    case "Singed":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_R1.webm",
          },
        ],
        skinPath: [
          "Singed_0.jpg",
          "Singed_1.jpg",
          "Singed_2.jpg",
          "Singed_3.jpg",
          "Singed_4.jpg",
          "Singed_5.jpg",
          "Singed_6.jpg",
          "Singed_7.jpg",
          "Singed_8.jpg",
          "Singed_9.jpg",
          "Singed_10.jpg",
          "Singed_19.jpg",
        ],
      };
    case "Sion":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_R1.webm",
          },
        ],
        skinPath: [
          "Sion_0.jpg",
          "Sion_1.jpg",
          "Sion_2.jpg",
          "Sion_3.jpg",
          "Sion_4.jpg",
          "Sion_5.jpg",
          "Sion_14.jpg",
          "Sion_22.jpg",
          "Sion_30.jpg",
          "Sion_40.jpg",
        ],
      };
    case "Sivir":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_R1.webm",
          },
        ],
        skinPath: [
          "Sivir_0.jpg",
          "Sivir_1.jpg",
          "Sivir_2.jpg",
          "Sivir_3.jpg",
          "Sivir_4.jpg",
          "Sivir_5.jpg",
          "Sivir_6.jpg",
          "Sivir_7.jpg",
          "Sivir_8.jpg",
          "Sivir_9.jpg",
          "Sivir_10.jpg",
          "Sivir_16.jpg",
          "Sivir_25.jpg",
          "Sivir_34.jpg",
          "Sivir_43.jpg",
          "Sivir_50.jpg",
          "Sivir_51.jpg",
          "Sivir_61.jpg",
        ],
      };
    case "Skarner":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_R1.webm",
          },
        ],
        skinPath: [
          "Skarner_0.jpg",
          "Skarner_1.jpg",
          "Skarner_2.jpg",
          "Skarner_3.jpg",
          "Skarner_4.jpg",
          "Skarner_5.jpg",
        ],
      };
    case "Smolder":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Smolder_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/rolemarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0901/ability_0901_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0901/ability_0901_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0901/ability_0901_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0901/ability_0901_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0901/ability_0901_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0901/ability_0901_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0901/ability_0901_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0901/ability_0901_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0901/ability_0901_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0901/ability_0901_R1.webm",
          },
        ],
        skinPath: ["Smolder_0.jpg", "Smolder_1.jpg"],
      };
    case "Sona":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_R1.webm",
          },
        ],
        skinPath: [
          "Sona_0.jpg",
          "Sona_1.jpg",
          "Sona_2.jpg",
          "Sona_3.jpg",
          "Sona_4.jpg",
          "Sona_5.jpg",
          "Sona_6.jpg",
          "Sona_7.jpg",
          "Sona_9.jpg",
          "Sona_17.jpg",
          "Sona_26.jpg",
          "Sona_35.jpg",
          "Sona_45.jpg",
          "Sona_46.jpg",
          "Sona_56.jpg",
        ],
      };
    case "Soraka":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_R1.webm",
          },
        ],
        skinPath: [
          "Soraka_0.jpg",
          "Soraka_1.jpg",
          "Soraka_2.jpg",
          "Soraka_3.jpg",
          "Soraka_4.jpg",
          "Soraka_5.jpg",
          "Soraka_6.jpg",
          "Soraka_7.jpg",
          "Soraka_8.jpg",
          "Soraka_9.jpg",
          "Soraka_15.jpg",
          "Soraka_16.jpg",
          "Soraka_17.jpg",
          "Soraka_18.jpg",
          "Soraka_27.jpg",
          "Soraka_37.jpg",
          "Soraka_44.jpg",
        ],
      };
    case "Swain":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_R1.webm",
          },
        ],
        skinPath: [
          "Swain_0.jpg",
          "Swain_1.jpg",
          "Swain_2.jpg",
          "Swain_3.jpg",
          "Swain_4.jpg",
          "Swain_11.jpg",
          "Swain_12.jpg",
          "Swain_21.jpg",
        ],
      };
    case "Sylas":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_R1.webm",
          },
        ],
        skinPath: [
          "Sylas_0.jpg",
          "Sylas_1.jpg",
          "Sylas_8.jpg",
          "Sylas_13.jpg",
          "Sylas_14.jpg",
          "Sylas_24.jpg",
          "Sylas_34.jpg",
          "Sylas_36.jpg",
        ],
      };
    case "Syndra":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_R1.webm",
          },
        ],
        skinPath: [
          "Syndra_0.jpg",
          "Syndra_1.jpg",
          "Syndra_2.jpg",
          "Syndra_3.jpg",
          "Syndra_4.jpg",
          "Syndra_5.jpg",
          "Syndra_6.jpg",
          "Syndra_7.jpg",
          "Syndra_16.jpg",
          "Syndra_25.jpg",
          "Syndra_34.jpg",
          "Syndra_44.jpg",
          "Syndra_54.jpg",
        ],
      };
    case "Tahm Kench":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_R1.webm",
          },
        ],
        skinPath: [
          "TahmKench_0.jpg",
          "TahmKench_1.jpg",
          "TahmKench_2.jpg",
          "TahmKench_3.jpg",
          "TahmKench_11.jpg",
          "TahmKench_20.jpg",
          "TahmKench_30.jpg",
        ],
      };
    case "Taliyah":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_R1.webm",
          },
        ],
        skinPath: [
          "Taliyah_0.jpg",
          "Taliyah_1.jpg",
          "Taliyah_2.jpg",
          "Taliyah_3.jpg",
          "Taliyah_11.jpg",
          "Taliyah_21.jpg",
        ],
      };
    case "Talon":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_R1.webm",
          },
        ],
        skinPath: [
          "Talon_0.jpg",
          "Talon_1.jpg",
          "Talon_2.jpg",
          "Talon_3.jpg",
          "Talon_4.jpg",
          "Talon_5.jpg",
          "Talon_12.jpg",
          "Talon_20.jpg",
          "Talon_29.jpg",
          "Talon_38.jpg",
          "Talon_39.jpg",
          "Talon_49.jpg",
        ],
      };
    case "Taric":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_R1.webm",
          },
        ],
        skinPath: [
          "Taric_0.jpg",
          "Taric_1.jpg",
          "Taric_2.jpg",
          "Taric_3.jpg",
          "Taric_4.jpg",
          "Taric_9.jpg",
          "Taric_18.jpg",
        ],
      };
    case "Teemo":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_R1.webm",
          },
        ],
        skinPath: [
          "Teemo_0.jpg",
          "Teemo_1.jpg",
          "Teemo_2.jpg",
          "Teemo_3.jpg",
          "Teemo_4.jpg",
          "Teemo_5.jpg",
          "Teemo_6.jpg",
          "Teemo_7.jpg",
          "Teemo_8.jpg",
          "Teemo_14.jpg",
          "Teemo_18.jpg",
          "Teemo_25.jpg",
          "Teemo_27.jpg",
          "Teemo_37.jpg",
          "Teemo_47.jpg",
        ],
      };
    case "Thresh":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_R1.webm",
          },
        ],
        skinPath: [
          "Thresh_0.jpg",
          "Thresh_1.jpg",
          "Thresh_2.jpg",
          "Thresh_3.jpg",
          "Thresh_4.jpg",
          "Thresh_5.jpg",
          "Thresh_6.jpg",
          "Thresh_13.jpg",
          "Thresh_14.jpg",
          "Thresh_15.jpg",
          "Thresh_17.jpg",
          "Thresh_27.jpg",
          "Thresh_28.jpg",
          "Thresh_38.jpg",
          "Thresh_39.jpg",
          "Thresh_49.jpg",
          "Thresh_59.jpg",
        ],
      };
    case "Tristana":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0018/ability_0018_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0018/ability_0018_Q1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0018/ability_0018_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0018/ability_0018_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0018/ability_0018_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0018/ability_0018_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0018/ability_0018_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0018/ability_0018_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0018/ability_0018_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0018/ability_0018_R1.webm",
          },
        ],
        skinPath: [
          "Tristana_0.jpg",
          "Tristana_1.jpg",
          "Tristana_2.jpg",
          "Tristana_3.jpg",
          "Tristana_4.jpg",
          "Tristana_5.jpg",
          "Tristana_6.jpg",
          "Tristana_10.jpg",
          "Tristana_11.jpg",
          "Tristana_12.jpg",
          "Tristana_24.jpg",
          "Tristana_33.jpg",
          "Tristana_40.jpg",
          "Tristana_41.jpg",
          "Tristana_51.jpg",
          "Tristana_61.jpg",
        ],
      };
    case "Trundle":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_Q1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_R1.webm",
          },
        ],
        skinPath: [
          "Trundle_0.jpg",
          "Trundle_1.jpg",
          "Trundle_2.jpg",
          "Trundle_3.jpg",
          "Trundle_4.jpg",
          "Trundle_5.jpg",
          "Trundle_6.jpg",
          "Trundle_12.jpg",
        ],
      };
    case "Tryndamere":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_R1.webm",
          },
        ],
        skinPath: [
          "Tryndamere_0.jpg",
          "Tryndamere_1.jpg",
          "Tryndamere_2.jpg",
          "Tryndamere_3.jpg",
          "Tryndamere_4.jpg",
          "Tryndamere_5.jpg",
          "Tryndamere_6.jpg",
          "Tryndamere_7.jpg",
          "Tryndamere_8.jpg",
          "Tryndamere_9.jpg",
          "Tryndamere_10.jpg",
          "Tryndamere_18.jpg",
          "Tryndamere_27.jpg",
        ],
      };
    case "Twisted Fate":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_R1.webm",
          },
        ],
        skinPath: [
          "TwistedFate_0.jpg",
          "TwistedFate_1.jpg",
          "TwistedFate_2.jpg",
          "TwistedFate_3.jpg",
          "TwistedFate_4.jpg",
          "TwistedFate_5.jpg",
          "TwistedFate_6.jpg",
          "TwistedFate_7.jpg",
          "TwistedFate_8.jpg",
          "TwistedFate_9.jpg",
          "TwistedFate_10.jpg",
          "TwistedFate_11.jpg",
          "TwistedFate_13.jpg",
          "TwistedFate_23.jpg",
          "TwistedFate_25.jpg",
          "TwistedFate_36.jpg",
        ],
      };
    case "Twitch":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_R1.webm",
          },
        ],
        skinPath: [
          "Twitch_0.jpg",
          "Twitch_1.jpg",
          "Twitch_2.jpg",
          "Twitch_3.jpg",
          "Twitch_4.jpg",
          "Twitch_5.jpg",
          "Twitch_6.jpg",
          "Twitch_7.jpg",
          "Twitch_8.jpg",
          "Twitch_12.jpg",
          "Twitch_27.jpg",
          "Twitch_36.jpg",
          "Twitch_45.jpg",
          "Twitch_55.jpg",
        ],
      };
    case "Udyr":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_R1.webm",
          },
        ],
        skinPath: [
          "Udyr_0.jpg",
          "Udyr_1.jpg",
          "Udyr_2.jpg",
          "Udyr_3.jpg",
          "Udyr_4.jpg",
          "Udyr_5.jpg",
          "Udyr_6.jpg",
        ],
      };
    case "Urgot":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_R1.webm",
          },
        ],
        skinPath: [
          "Urgot_0.jpg",
          "Urgot_1.jpg",
          "Urgot_2.jpg",
          "Urgot_3.jpg",
          "Urgot_9.jpg",
          "Urgot_15.jpg",
          "Urgot_23.jpg",
        ],
      };
    case "Varus":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_R1.webm",
          },
        ],
        skinPath: [
          "Varus_0.jpg",
          "Varus_1.jpg",
          "Varus_2.jpg",
          "Varus_3.jpg",
          "Varus_4.jpg",
          "Varus_5.jpg",
          "Varus_6.jpg",
          "Varus_7.jpg",
          "Varus_9.jpg",
          "Varus_16.jpg",
          "Varus_17.jpg",
          "Varus_34.jpg",
          "Varus_44.jpg",
          "Varus_53.jpg",
        ],
      };
    case "Vayne":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_R1.webm",
          },
        ],
        skinPath: [
          "Vayne_0.jpg",
          "Vayne_1.jpg",
          "Vayne_2.jpg",
          "Vayne_3.jpg",
          "Vayne_4.jpg",
          "Vayne_5.jpg",
          "Vayne_6.jpg",
          "Vayne_10.jpg",
          "Vayne_11.jpg",
          "Vayne_12.jpg",
          "Vayne_13.jpg",
          "Vayne_14.jpg",
          "Vayne_15.jpg",
          "Vayne_25.jpg",
          "Vayne_32.jpg",
          "Vayne_33.jpg",
          "Vayne_44.jpg",
          "Vayne_55.jpg",
        ],
      };
    case "Veigar":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0045/ability_0045_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0045/ability_0045_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0045/ability_0045_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0045/ability_0045_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0045/ability_0045_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0045/ability_0045_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0045/ability_0045_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0045/ability_0045_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0045/ability_0045_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0045/ability_0045_R1.webm",
          },
        ],
        skinPath: [
          "Veigar_0.jpg",
          "Veigar_1.jpg",
          "Veigar_2.jpg",
          "Veigar_3.jpg",
          "Veigar_4.jpg",
          "Veigar_5.jpg",
          "Veigar_6.jpg",
          "Veigar_7.jpg",
          "Veigar_8.jpg",
          "Veigar_9.jpg",
          "Veigar_13.jpg",
          "Veigar_23.jpg",
          "Veigar_32.jpg",
          "Veigar_41.jpg",
          "Veigar_51.jpg",
          "Veigar_60.jpg",
        ],
      };
    case "Vel'Koz":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_R1.webm",
          },
        ],
        skinPath: [
          "Velkoz_0.jpg",
          "Velkoz_1.jpg",
          "Velkoz_2.jpg",
          "Velkoz_3.jpg",
          "Velkoz_4.jpg",
          "Velkoz_11.jpg",
          "Velkoz_20.jpg",
        ],
      };
    case "Vex":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vex_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_R1.webm",
          },
        ],
        skinPath: ["Vex_0.jpg", "Vex_1.jpg", "Vex_10.jpg"],
      };
    case "Vi":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_R1.webm",
          },
        ],
        skinPath: [
          "Vi_0.jpg",
          "Vi_1.jpg",
          "Vi_2.jpg",
          "Vi_3.jpg",
          "Vi_4.jpg",
          "Vi_5.jpg",
          "Vi_11.jpg",
          "Vi_12.jpg",
          "Vi_20.jpg",
          "Vi_29.jpg",
          "Vi_30.jpg",
          "Vi_39.jpg",
        ],
      };
    case "Viego":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_R1.webm",
          },
        ],
        skinPath: [
          "Viego_0.jpg",
          "Viego_1.jpg",
          "Viego_10.jpg",
          "Viego_19.jpg",
          "Viego_21.jpg",
          "Viego_30.jpg",
          "Viego_37.jpg",
        ],
      };
    case "Viktor":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0112/ability_0112_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0112/ability_0112_Q1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0112/ability_0112_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0112/ability_0112_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0112/ability_0112_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0112/ability_0112_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0112/ability_0112_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0112/ability_0112_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0112/ability_0112_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0112/ability_0112_R1.webm",
          },
        ],
        skinPath: [
          "Viktor_0.jpg",
          "Viktor_1.jpg",
          "Viktor_2.jpg",
          "Viktor_3.jpg",
          "Viktor_4.jpg",
          "Viktor_5.jpg",
          "Viktor_14.jpg",
        ],
      };
    case "Vladimir":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_Q1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_R1.webm",
          },
        ],
        skinPath: [
          "Vladimir_0.jpg",
          "Vladimir_1.jpg",
          "Vladimir_2.jpg",
          "Vladimir_3.jpg",
          "Vladimir_4.jpg",
          "Vladimir_5.jpg",
          "Vladimir_6.jpg",
          "Vladimir_7.jpg",
          "Vladimir_8.jpg",
          "Vladimir_14.jpg",
          "Vladimir_21.jpg",
          "Vladimir_30.jpg",
          "Vladimir_39.jpg",
        ],
      };
    case "Volibear":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_Q1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_R1.webm",
          },
        ],
        skinPath: [
          "Volibear_0.jpg",
          "Volibear_1.jpg",
          "Volibear_2.jpg",
          "Volibear_3.jpg",
          "Volibear_4.jpg",
          "Volibear_5.jpg",
          "Volibear_6.jpg",
          "Volibear_7.jpg",
          "Volibear_9.jpg",
          "Volibear_19.jpg",
        ],
      };
    case "Warwick":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_R1.webm",
          },
        ],
        skinPath: [
          "Warwick_0.jpg",
          "Warwick_1.jpg",
          "Warwick_2.jpg",
          "Warwick_3.jpg",
          "Warwick_4.jpg",
          "Warwick_5.jpg",
          "Warwick_6.jpg",
          "Warwick_7.jpg",
          "Warwick_8.jpg",
          "Warwick_9.jpg",
          "Warwick_10.jpg",
          "Warwick_16.jpg",
          "Warwick_35.jpg",
          "Warwick_45.jpg",
          "Warwick_46.jpg",
        ],
      };
    case "Xayah":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_R1.webm",
          },
        ],
        skinPath: [
          "Xayah_0.jpg",
          "Xayah_1.jpg",
          "Xayah_2.jpg",
          "Xayah_3.jpg",
          "Xayah_4.jpg",
          "Xayah_8.jpg",
          "Xayah_17.jpg",
          "Xayah_26.jpg",
          "Xayah_28.jpg",
          "Xayah_37.jpg",
          "Xayah_38.jpg",
          "Xayah_47.jpg",
        ],
      };
    case "Xerath":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_R1.webm",
          },
        ],
        skinPath: [
          "Xerath_0.jpg",
          "Xerath_1.jpg",
          "Xerath_2.jpg",
          "Xerath_3.jpg",
          "Xerath_4.jpg",
          "Xerath_5.jpg",
          "Xerath_12.jpg",
          "Xerath_21.jpg",
          "Xerath_30.jpg",
        ],
      };
    case "Xin Zhao":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/XinZhao_0.jpg",
        difficulty: "Low",
        difficultyId: 0,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_R1.webm",
          },
        ],
        skinPath: [
          "XinZhao_0.jpg",
          "XinZhao_1.jpg",
          "XinZhao_2.jpg",
          "XinZhao_3.jpg",
          "XinZhao_4.jpg",
          "XinZhao_5.jpg",
          "XinZhao_6.jpg",
          "XinZhao_13.jpg",
          "XinZhao_20.jpg",
          "XinZhao_27.jpg",
          "XinZhao_36.jpg",
        ],
      };
    case "Yasuo":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_R1.webm",
          },
        ],
        skinPath: [
          "Yasuo_0.jpg",
          "Yasuo_1.jpg",
          "Yasuo_2.jpg",
          "Yasuo_3.jpg",
          "Yasuo_9.jpg",
          "Yasuo_10.jpg",
          "Yasuo_17.jpg",
          "Yasuo_18.jpg",
          "Yasuo_35.jpg",
          "Yasuo_36.jpg",
          "Yasuo_45.jpg",
          "Yasuo_54.jpg",
          "Yasuo_55.jpg",
          "Yasuo_56.jpg",
          "Yasuo_57.jpg",
          "Yasuo_68.jpg",
          "Yasuo_77.jpg",
        ],
      };
    case "Yone":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_R1.webm",
          },
        ],
        skinPath: [
          "Yone_0.jpg",
          "Yone_1.jpg",
          "Yone_10.jpg",
          "Yone_19.jpg",
          "Yone_26.jpg",
          "Yone_35.jpg",
          "Yone_45.jpg",
          "Yone_46.jpg",
          "Yone_55.jpg",
          "Yone_58.jpg",
        ],
      };
    case "Yorick":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleFighter.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_R1.webm",
          },
        ],
        skinPath: [
          "Yorick_0.jpg",
          "Yorick_1.jpg",
          "Yorick_2.jpg",
          "Yorick_3.jpg",
          "Yorick_4.jpg",
          "Yorick_12.jpg",
          "Yorick_21.jpg",
          "Yorick_30.jpg",
        ],
      };
    case "Yuumi":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleSupport.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_R1.webm",
          },
        ],
        skinPath: [
          "Yuumi_0.jpg",
          "Yuumi_1.jpg",
          "Yuumi_11.jpg",
          "Yuumi_19.jpg",
          "Yuumi_28.jpg",
          "Yuumi_37.jpg",
          "Yuumi_39.jpg",
          "Yuumi_49.jpg",
          "Yuumi_50.jpg",
        ],
      };
    case "Zac":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg",
        difficulty: "High",
        difficultyId: 2,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleTank.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_R1.webm",
          },
        ],
        skinPath: [
          "Zac_0.jpg",
          "Zac_1.jpg",
          "Zac_2.jpg",
          "Zac_6.jpg",
          "Zac_7.jpg",
          "Zac_14.jpg",
          "Zac_24.jpg",
        ],
      };
    case "Zed":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleAssassin.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_R1.webm",
          },
        ],
        skinPath: [
          "Zed_0.jpg",
          "Zed_1.jpg",
          "Zed_2.jpg",
          "Zed_3.jpg",
          "Zed_10.jpg",
          "Zed_11.jpg",
          "Zed_13.jpg",
          "Zed_15.jpg",
          "Zed_30.jpg",
          "Zed_31.jpg",
          "Zed_38.jpg",
          "Zed_49.jpg",
          "Zed_58.jpg",
        ],
      };
    case "Zeri":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMarksman.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_R1.webm",
          },
        ],
        skinPath: [
          "Zeri_0.jpg",
          "Zeri_1.jpg",
          "Zeri_10.jpg",
          "Zeri_19.jpg",
          "Zeri_28.jpg",
          "Zeri_29.jpg",
        ],
      };
    case "Ziggs":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_R1.webm",
          },
        ],
        skinPath: [
          "Ziggs_0.jpg",
          "Ziggs_1.jpg",
          "Ziggs_2.jpg",
          "Ziggs_3.jpg",
          "Ziggs_4.jpg",
          "Ziggs_5.jpg",
          "Ziggs_6.jpg",
          "Ziggs_7.jpg",
          "Ziggs_14.jpg",
          "Ziggs_23.jpg",
          "Ziggs_24.jpg",
          "Ziggs_33.jpg",
        ],
      };
    case "Zilean":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_R1.webm",
          },
        ],
        skinPath: [
          "Zilean_0.jpg",
          "Zilean_1.jpg",
          "Zilean_2.jpg",
          "Zilean_3.jpg",
          "Zilean_4.jpg",
          "Zilean_5.jpg",
          "Zilean_6.jpg",
          "Zilean_14.jpg",
        ],
      };
    case "Zoe":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_R1.webm",
          },
        ],
        skinPath: [
          "Zoe_0.jpg",
          "Zoe_1.jpg",
          "Zoe_2.jpg",
          "Zoe_9.jpg",
          "Zoe_18.jpg",
          "Zoe_19.jpg",
          "Zoe_20.jpg",
          "Zoe_22.jpg",
        ],
      };
    case "Zyra":
      return {
        background:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg",
        difficulty: "Medium",
        difficultyId: 1,
        role: "https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg",
        videoPaths: [
          {
            name: "Passive",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_P1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_P1.webm",
          },
          {
            name: "SpellQ",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_Q1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_Q1.webm",
          },
          {
            name: "SpellW",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_W1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_W1.webm",
          },
          {
            name: "SpellE",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_E1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_E1.webm",
          },
          {
            name: "SpellR",
            path_1:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_R1.mp4",
            path_2:
              "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_R1.webm",
          },
        ],
        skinPath: [
          "Zyra_0.jpg",
          "Zyra_1.jpg",
          "Zyra_2.jpg",
          "Zyra_3.jpg",
          "Zyra_4.jpg",
          "Zyra_5.jpg",
          "Zyra_6.jpg",
          "Zyra_7.jpg",
          "Zyra_16.jpg",
          "Zyra_36.jpg",
          "Zyra_46.jpg",
          "Zyra_55.jpg",
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
