<template>
  <Navbar />
  <div id="about" class="about">
    <div class="about__introduce">
      <div class="introduce__card">
        <img
          src="../assets/images/about/me.png"
          alt="photo stickers"
          class="introduce__photo"
        />
        <h1>Ethan</h1>
        <h3>Front-End Developer</h3>
        <p class="introduce__skills">Vue｜SCSS｜Git Version control</p>
        <a href="https://github.com/KazenoYu">
          <img src="../assets/images/about/icon/icon_github.svg" alt="github" />
        </a>
        <a href="https://codepen.io/your-work/">
          <img
            src="../assets/images/about/icon/icon_codepen.svg"
            alt="codepen"
          />
        </a>
      </div>
    </div>
    <!-- <div>
      <article>
        嗨！我是 Ethan，是一名 Vue 前端工程師！<br />
        過去曾有與跨過客戶溝通的經驗，也曾多次參與技術分享。<br />
        很高興能認識正在閱讀這段文字的你！
      </article>
    </div> -->
    <h1 class="about__tag">About</h1>
  </div>

  <div id="project" class="project">
    <h1 class="project__title">project</h1>
    <div class="project__card" v-for="(project, index) in project" :key="index">
      <a :href="project.link"
        ><img :src="project.imgPath" alt="projectImg" class="card__img"
      /></a>
      <!-- <h3 class="card__name">{{ project.name }}</h3>
      <div class="card__tag" v-for="skills in project.skills" :key="skills">
        {{ skills }}
      </div>
      <p>{{ project.describe }}</p>
      <div class="card__cover"></div> -->
    </div>
  </div>
  <!-- <div id="project" class="project">
    <div v-for="(project, index) in project" :key="index">
      <img :src="project.imgPath" alt="project img" class="project__img" />
    </div>
  </div> -->

  <div id="note">
    <h1>Note</h1>
    <div>notion</div>
    <table class="note__table">
      <thead>
        <tr>
          <th>編號</th>
          <th>筆記</th>
          <th>Tag</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="note in note" :key="note.number">
          <td>{{ note.number }}</td>
          <td>{{ note.title }}</td>
          <td>{{ note.tag }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="center_test">
    <div class="center"></div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
  },
  data() {
    return {
      project: [
        {
          name: "BeatCome",
          imgPath: require("../assets/images/project/beatcome.jpg"),
          skills: ["Html", "CSS", "JavaScript"],
          link: "https://kazenoyu.github.io/Beatcome/",
          describe: "音樂商城",
        },
        {
          name: "Old Portfolio",
          imgPath: require("../assets/images/project/old_potrfolio.jpg"),
          skills: ["Html", "CSS", "JavaScript"],
          link: "https://kazenoyu.github.io/OldPortfolio/",
        },
        {
          name: "Eway Form",
          imgPath: require("../assets/images/project/eway.jpg"),
          skills: ["Html", "CSS", "JavaScript"],
          link: "https://kazenoyu.github.io/eway_interview_test/",
        },
        {
          name: "React Note",
          imgPath: require("../assets/images/project/react_note.jpg"),
          skills: ["Html", "CSS", "JavaScript"],
          link: "https://kazenoyu.github.io/ReactNote/",
        },
      ],
      note: [
        {
          number: "1",
          title: "nextTick",
          tag: "notion",
          link: "https://www.notion.so/yugeng/nextTick-08b7625ec6fa4cf382aa914991441a80?pvs=4",
        },
      ],
      numbers: [1, 2, 3, 4, 5, 6],
    };
  },
  created() {
    this.forEachFn();
    this.mapFn();
    this.sortFn();
  },
  methods: {
    forEachFn() {
      this.numbers.forEach((number) => {
        // const num = number * 2;
        console.log("forEachNumber", number);
        // console.log("forEach2num", num);
      });
    },
    mapFn() {
      const num = this.numbers.map((number) => {
        return number * 2;
      });
      console.log("mapNumber", num);
    },
    sortFn() {
      const sortArray = [2, 5, 1, 4, 6, 8, 3, 10, 9];
      sortArray.sort((a, b) => a - b);
      console.log("sort", sortArray);
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 32px;
  margin: 0;
}
h2 {
  font-size: 24px;
  margin: 0;
}
h3 {
  font-size: 16px;
  margin: 0;
}
.about {
  @include flex-container;
  justify-content: start;
  position: relative;
  width: 100vw;
  height: 92vh;
  // min-height: 1080px;
  margin-left: 32px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    margin-left: 0px;
  }

  .about__introduce {
    margin: 24px;
    .introduce__card {
      background-color: #6396d8;
      color: antiquewhite;
      padding: 16px;
      border-radius: 4px;
      box-shadow: 4px 4px 8px xrgba(0, 0, 0, 0.2);
      .introduce__photo {
        max-height: 300px;
      }
      .introduce__skills {
        color: #ffd15c;
      }
      a {
        margin-right: 8px;
      }
    }
  }

  .about__tag {
    position: absolute;
    bottom: 0;
    right: 0;
    color: white;
  }
}
.project {
  @include flex-container;
  flex-wrap: wrap;
  position: relative;
  .project__title {
    color: whitesmoke;
  }

  .project__card {
    background-color: #f1f1f1;
    position: relative;
    height: 100%;
    // width: 650px;
    border-radius: 4px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
    margin: 16px;

    overflow: hidden;
    @media (max-width: 768px) {
      height: 300px;
    }

    .card__img {
      height: 400px;
      width: 100%;
      // padding: 16px;
      // width: 600px;
      border-radius: 4px;
    }
    .card__name {
      margin: 8px;
    }

    // 定義標籤樣式
    .card__tag {
      display: inline-block;
      margin-left: 8px;
      padding: 2px 8px;
      background-color: #9ecdff; // 背景顏色
      color: #fff; // 文字顏色
      border-radius: 20px; // 圓角邊框
      border: 1px solid #4a9bf2; // 邊框
      font-size: 14px;
      font-weight: bold;
    }

    // 當滑鼠懸停在標籤上時，樣式變化
    .card__tag:hover {
      background-color: #0056b3;
      border-color: #0056b3;
    }

    // .project__card::after {
    //   content: "test";
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   height: 100%;
    //   width: 100%;
    //   background-color: rgba(0, 0, 0, 0.5);
    //   opacity: 0;
    //   transition: opacity 0.3s;
    // }

    // /* 鼠标悬停时的效果 */
    // .project__card:hover {
    //   transform: scale(1.1); /* 缩放效果 */
    // }

    // .project__card:hover::after {
    //   opacity: 1; /* 显示遮罩 */
    // }

    .card__cover {
      content: "test";
      background-size: cover;

      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .card__cover:hover {
      opacity: 1;
    }
  }
}

.note__table {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
  min-width: 1080px;
  height: 1920px;
}
.center_test {
  height: 800px;
  width: 800px;
  background: #4a9bf2;
  display: flex;
  // justify-content: center;
  // align-items: center;
  .center {
    height: 400px;
    width: 400px;
    background: #9ecdff;
    margin: auto;
  }
}
</style>
