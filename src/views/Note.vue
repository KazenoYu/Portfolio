<template>
  <div class="note-list">
    <div class="tags">
      <div
        class="tag"
        v-for="(tag, index) in tags"
        :key="index"
        @click="filterNotes(tag)"
        :class="{ active: selectedTag === tag, [getTagClass(tag)]: true }"
      >
        {{ tag }}
      </div>
    </div>
    <div class="note-item" v-for="(note, index) in filteredNotes" :key="index">
      <div class="note-content">
        <a class="note-title" :href="note.link">{{ note.content }}</a>
        <div class="note-tags">
          <span
            v-for="(tag, index) in note.tag"
            :key="index"
            class="note-tag"
            :class="getTagClass(tag)"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [
        {
          content: "淺拷貝 vs 深拷貝",
          tag: ["JavaScript"],
          link: "https://yugeng.notion.site/JavaScript-vs-a500c10b34464f3f8498a91c16a62868",
        },
        {
          content: "React Note",
          tag: ["React"],
          link: "https://yugeng.notion.site/React-fc026f2993c442f6a9bd1b76c58ba1c2?pvs=4",
        },
        {
          content:
            "Vue CLI Run build 時遇到的問題，與 Vue History 跟 Hash 模式的比較",
          tag: ["Vue", "Vue Router"],
          link: "https://yugeng.notion.site/Vue-CLI-run-build-cb79d4d177d34f7297ea498438a9a13d?pvs=4",
        },
      ],
      selectedTag: "All",
      tagColors: {
        All: "color-all",
        JavaScript: "color-javascript",
        React: "color-react",
        Vue: "color-vue",
        "Vue Router": "color-vue-router",
        // 添加更多標籤和對應的顏色
      },
    };
  },
  computed: {
    tags() {
      const allTags = this.notes.reduce((tags, note) => {
        return tags.concat(note.tag);
      }, []);
      return ["All", ...new Set(allTags)];
    },
    filteredNotes() {
      if (this.selectedTag === "All") {
        return this.notes;
      } else {
        return this.notes.filter((note) => note.tag.includes(this.selectedTag));
      }
    },
  },
  methods: {
    filterNotes(tag) {
      this.selectedTag = tag;
    },
    getTagClass(tag) {
      return this.tagColors[tag] || "default-color";
    },
  },
};
</script>

<style scoped lang="scss">
.note-list {
  display: flex;
  flex-direction: column;
  color: white;
  column-count: 3;
}

.tags {
  display: flex;
  margin: 10px;
  .tag {
    cursor: pointer;
    margin-right: 10px;
    display: inline-block;
    border-radius: 5px;
    padding: 6px 6px;
    &.active {
      // text-decoration: underline;
      box-shadow: 4px 5px #888888;
    }
    &.default-color {
      background-color: #ccc;
    }
    &.color-all {
      // color: red;
      background-color: #ff0000; /* 自定義 "All" 的顏色 */
    }
    &.color-javascript {
      // color: red;
      background-color: #f0db4f;
    }
    &.color-react {
      background-color: #61dafb;
    }
    &.color-vue {
      background-color: #41b883;
    }
    &.color-vue-router {
      background-color: #0775b7;
    }
  }
}

.note-item {
  // width: calc(33.33% - 20px);
  margin: 10px;

  .note-content {
    border: 1px solid #ccc;
    padding: 10px;
  }

  .note-title {
    color: white;
    text-decoration: none;
  }

  .note-tags {
    margin-top: 10px;
    .note-tag {
      display: inline-block;
      margin-right: 5px;
      border-radius: 5px;
      padding: 3px 6px;

      &.default-color {
        background-color: #ccc;
      }
      &.color-all {
        // color: red;
        background-color: #ff0000; /* 自定義 "All" 的顏色 */
      }
      &.color-javascript {
        // color: red;
        background-color: #f0db4f;
      }
      &.color-react {
        background-color: #61dafb;
      }
      &.color-vue {
        background-color: #41b883;
      }
      &.color-vue-router {
        background-color: #0775b7;
      }
      // 添加更多標籤對應的顏色
    }
  }
}
</style>
