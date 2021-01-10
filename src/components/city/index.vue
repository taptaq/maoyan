<template>
  <section>
    <div class="city_body">
      <div class="city_list">
        <div class="city_hot">
          <h2>热门城市</h2>
          <ul class="clearfix">
            <li v-for="(item, index) in hotcitydata" :key="index">{{ item }}</li>
          </ul>
        </div>

        <div class="city_sort" ref="city_sort">
          <div v-for="(item, index) in citylist" :key="index">
            <h2>{{ item.title }}</h2>
            <ul>
              <li v-for="(item, index) in item.lists" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="city_index">
        <ul>
          <li
            v-for="(item, index) in citylist"
            :key="index"
            @touchstart="handleToIndex(index)"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "city",
  data() {
    return {
      hotcitydata: [],
      citylist: [],
    };
  },
  mounted() {
    this.axios.get("/json/city.json").then((res) => {
      var msg = res.statusText;
      if (msg === "OK") {
        this.hotcitydata = res.data.hotcity[0].lists;
        this.citylist = res.data.city;
        console.log(this.citylist);
      }
    });
  },
  methods: {
    //格式化城市数据为([{index: firstLetter,lists: [{ nm: xxx, id: xxx}]})
    formatcitylist(cities) {
      var citylist = [];
      var hotlist = [];

      // 热门城市
      for (var i = 0; i < cities.length; i++) {
        if (cities[i].isHot == 1) {
          hotlist.push(cities[i]);
        }
      }

      // 普通城市
      for (var i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (tocom(firstLetter)) {
          //新添加index
          citylist.push({
            index: firstLetter,
            lists: [{ nm: cities[i].nm, id: cities[i].id }],
          });
        } else {
          //累加到已有index中
          for (var j = 0; j < citylist.length; j++) {
            if (citylist[i].index === firstLetter) {
              citylist[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }

      citylist.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        } else if (n1.index < n2.index) {
          return -1;
        } else {
          return 0;
        }
      });

      function tocom(firstLetter) {
        for (var i = 0; i < citylist.length; i++) {
          if (citylist[i].index === firstLetter) {
            return false;
          }
        }
      }
      return {
        citylist,
        hotlist,
      };
    },

    // 跳转到指定的城市字母的位置
    handleToIndex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
    },
  },
};
</script>

<style scoped>
.city_body {
  margin-top: 95px;
  display: flex;
  width: 100%;
  height: 95vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  font-size: 15px;
}

.city_body .city_list {
  height: 98%;
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}

.city_body .city_list::-webkit-scrollbar {
  background: transparent;
  width: 0;
}

.city_body .city_hot {
  margin-top: 20px;
}

.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 28px;
  font-size: 20px;
  background: #f0f0f0;
  font-weight: normal;
}

.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 5px;
  text-align: center;
}

.city_body .city_sort div {
  margin-top: 20px;
}

.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}

.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}

.city_body .city_sort ul li {
  line-height: 30px;
  background: #fff;
  margin-bottom: 5px;
}

.city_body .city_index {
  margin-top: -100px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px solid #fff5f0;
}
</style>
