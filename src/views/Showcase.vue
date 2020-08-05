<template>
  <v-container class="parentCont">
    <v-row class="firstHeadRow">
      <v-col class="headRowCol1" cols="12" sm="7" md="7" lg="7" xl="7">
        <div class="profileImgDiv">
          <img class="profImg" src="../assets/profilepic.jpg" />
        </div>
      </v-col>
      <v-col class="headRowCol2" cols="12" sm="5" md="5" lg="5" xl="5">
        <v-row class="nameRow">
          <h1 class="nameText">Künter Evert</h1>
        </v-row>
        <v-row class="jobRow">
          <h2 class="jobText">Software development</h2>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="portfolioRow" no-gutters>
      <v-row class="solutionsHeaderRow" no-gutters>
        <h1 id="solHeader" class="solutionsHeader">My solutions</h1>
      </v-row>
      <v-row no-gutters style="width: 100%; background: #fff2f2;">
        <hr class="separator" />
      </v-row>

      <!-- FIRST PROJECT -->
      <v-row class="portfolioHeaderRow" no-gutters>
        <h1 id="solHeader" class="projectHeader">Recruitment tool</h1>
      </v-row>
      <v-row class="projectsRow" no-gutters>
        <v-col class="projectDataCol" cols="12" sm="4" md="4" lg="4" xl="4">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescP"
          >Main view</p>
          <hr
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            class="projectDescLine"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="8" md="8" lg="8" xl="8">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            class="projectImage"
            src="../assets/recruitment tool/mainview.png"
          />
        </v-col>

        <v-col class="projectDataCol" cols="12" sm="8" md="8" lg="8" xl="8">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            class="projectImage"
            src="../assets/recruitment tool/candidate.png"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="4" md="4" lg="4" xl="4">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescP"
          >Candidate view</p>
          <hr
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescLine"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="4" md="4" lg="4" xl="4">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescP"
          >Built-in emailing</p>
          <hr
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescLine"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="8" md="8" lg="8" xl="8">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            class="projectImage"
            src="../assets/recruitment tool/email.png"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="8" md="8" lg="8" xl="8">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            class="projectImage"
            src="../assets/recruitment tool/analytics.png"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="4" md="4" lg="4" xl="4">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescP"
          >Campaign analytics</p>
          <hr
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescLine"
          />
        </v-col>
        <v-row no-gutters style="width: 100%; background: #fff2f2;">
          <hr class="separator" />
        </v-row>
      </v-row>
      <!-- Second PROJECT -->
      <v-row class="portfolioHeaderRow" no-gutters>
        <h1 id="solHeader" class="projectHeader">Project management</h1>
      </v-row>
      <v-row class="projectsRow" no-gutters>
        <v-col class="projectDataCol" cols="12" sm="4" md="4" lg="4" xl="4">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescP"
          >Signup</p>
          <hr
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            class="projectDescLine"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="8" md="8" lg="8" xl="8">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            class="projectImage"
            src="../assets/project dashboard/signup.png"
          />
        </v-col>

        <v-col class="projectDataCol" cols="12" sm="8" md="8" lg="8" xl="8">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            class="projectImage"
            src="../assets/project dashboard/dashboard.png"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="4" md="4" lg="4" xl="4">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescP"
          >Dashboard</p>
          <hr
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescLine"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="4" md="4" lg="4" xl="4">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescP"
          >Project feed</p>
          <hr
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescLine"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="8" md="8" lg="8" xl="8">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            class="projectImage"
            src="../assets/project dashboard/feed.png"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="8" md="8" lg="8" xl="8">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            class="projectImage"
            src="../assets/project dashboard/post.png"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="4" md="4" lg="4" xl="4">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescP"
          >Post view</p>
          <hr
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescLine"
          />
        </v-col>
      </v-row>
      <v-row no-gutters style="width: 100%; background: #fff2f2;">
        <hr class="separator" />
      </v-row>
      <!-- FIRST PROJECT -->

      <v-row no-gutters class="portfolioHeaderRow">
        <h1 id="solHeader" class="projectHeader">API analytics</h1>
      </v-row>
      <v-row class="projectsRow" no-gutters>
        <v-col class="projectDataCol" cols="12" sm="4" md="4" lg="4" xl="4">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescP"
          >HR data calculator</p>
          <hr
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            class="projectDescLine"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="8" md="8" lg="8" xl="8">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            class="projectImage"
            src="../assets/calculator/calculator.png"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="8" md="8" lg="8" xl="8">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            class="projectImage"
            src="../assets/calculator/specimen1.png"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="4" md="4" lg="4" xl="4">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescP"
          >Geocollections search</p>
          <hr
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescLine"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="4" md="4" lg="4" xl="4">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescP"
          >Detail view</p>
          <hr
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            class="projectDescLine"
          />
        </v-col>
        <v-col class="projectDataCol" cols="12" sm="8" md="8" lg="8" xl="8">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            class="projectImage"
            src="../assets/calculator/specimen2.png"
          />
        </v-col>
      </v-row>
      <v-row no-gutters style="width: 100%; background: #fff2f2;">
        <hr class="separator" />
      </v-row>
    </v-row>
    <v-row no-gutters class="portfolioHeaderRow">
      <h1 id="solHeader" class="projectHeader">Technology stack</h1>
    </v-row>
  </v-container>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "Home",
  components: {},
  mounted() {
    AOS.init();
  },
};
</script>
<style lang="scss">
.hide {
  opacity: 0;
}
.show {
  opacity: 1;
}

.parentCont {
  padding: 0;

  background-color: #fff;
  min-width: 100%;
  min-height: 100%;
  .firstHeadRow {
    margin: 0;
    background-image: url("../assets/25201.jpg");
    background-size: 100% 100%;
    min-height: 800px;
    .headRowCol1 {
      // min-width: 300px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 13%;
      // max-width: 60%;
      .profileImgDiv {
        // margin-top: 60px;
        // margin-right: 200px;
      }
    }
    .headRowCol2 {
      align-self: center;
    }
  }
}
.profImg {
  max-width: 240px;
  max-height: 440px;
  border-radius: 50px;
  // box-shadow: 0 0 20px 20px #530c3e inset;
}
.nameRow {
  justify-content: flex-start;
  .nameText {
    text-align: left;
    font-size: 70px;
    color: #fff;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
}
.jobRow {
  justify-content: flex-start;
  .jobText {
    text-align: left;
    font-size: 50px;
    color: #fff;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
}
.item {
  width: 100%;
  height: 100%;
}
.aboutRow {
  // background: #e8bedb;
}
.aboutHeaderRow {
  justify-content: center;
}
.solutionsHeaderRow {
  width: 100%;
  justify-content: center;
  background: #fff2f2;
  padding-top: 15px;
}
.portfolioHeaderRow {
  width: 100%;
  justify-content: center;
  background: #fff2f2;
  padding-top: 15px;
}
.projectImage {
  opacity: 0;
  width: 90%;
  max-height: 90vh;
  transition: all 2s ease;
}
.solutionsHeader {
  font-size: 60px;
  margin-bottom: 30px;
  margin-top: 50px;
  color: #9e047a;
}
.projectHeader {
  font-size: 50px;
  margin-bottom: 50px;
  color: #9e047a;
}
.separator {
  width: 50%;
  border: 2px solid #9e047a;
  margin-left: 25%;
  margin-bottom: 100px;
}
.projectDescLine {
  opacity: 1;
  width: 50%;
  margin-left: 25%;
  margin-bottom: 50px;
  margin-top: 50px;
  transition: all 2s ease;
}
.projectsRow {
  background: #fff2f2;
}
.projectDescP {
  opacity: 0;
  font-size: 60px;
  color: #700056;
  transition: all 2s ease;
}
.projectDataCol {
  margin-bottom: 50px;
}
@media only screen and (max-width: 599px) {
  .parentCont {
    .firstHeadRow {
      .headRowCol1 {
        justify-content: center;
        padding-right: 0;
      }
    }
  }
  .nameRow {
    padding-left: 10px;
    padding-right: 10px;
    justify-content: center;
    .nameText {
      text-align: center;
      line-height: 65px;
    }
  }
  .jobRow {
    padding-left: 10px;
    padding-right: 10px;
    justify-content: center;
    .jobText {
      text-align: center;
      font-size: 40px;
    }
  }
  .projectsRow :nth-child(1) {
    order: 0;
  }
  .projectsRow :nth-child(2) {
    order: 0;
  }
  .projectsRow :nth-child(3) {
    order: 3;
  }
  .projectsRow :nth-child(4) {
    order: 2;
  }
  .projectsRow :nth-child(5) {
    order: 2;
  }
  .projectsRow :nth-child(6) {
    order: 2;
  }
  .projectsRow :nth-child(7) {
    order: 2;
  }
  .projectsRow :nth-child(8) {
    order: 2;
  }
}
</style>
