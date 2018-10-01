<template>
  <div class="Home">
    
    <div class="logo-place">
      <img src="./Logo.jpg" class="logo-itself">
    </div>

    <div class="introduction">
      <h2>The challenge</h2>
      <p>
        Barcelona is a mature tourist destination that receives more than 27 million visitors per year, half of whom generate at least one overnight stay. Worldwide, Barcelona ranked 6th among European city destinations in 2017. International visitor expenditure in Barcelona has gradually risen in recent years, in line with the increasing volume of tourists arriving in the city. The visitor economy in the city has an impact on the services in the city which are no longer targeted at the local residents, but at the tourists. The result of this transformation during the past years is tourism gentrification evident in the historic centres of the city. 
      </p>
    </div> <!-- end introducction -->
    <div class="logo-place">
    <!--  <img src="assets/Logo.png"> -->
    </div>
    <div class="Event-details">
      <p>
        Tourism gentrification (touristification) refers to the transformation of a middle-class neighbourhood into a relatively affluent and exclusive place marked by a rapid increase of corporate entertainment and tourism venues. 
        The challenge of the Citython is to make proposals for management and intervention in the urban public spaces of the historical centers of Barcelona in order to mitigate the impacts of the tourism gentrification caused by the visitor economy. For this reason, an analysis of urban data is required in order to solve the problems with the exploitation of the historic centers (both public and collective spaces) through proposals that have as many goals as possible:
      </p>
      <ul class="list-group" style="padding-top: 40px;">
        <li class="list-group-item">Mitigate the flow of people</li>
        <li class="list-group-item">Reduce crowding</li>
        <li class="list-group-item">Promote civic behaviors</li>
        <li class="list-group-item">Promote the awareness of the user towards a responsible and respectful use of space</li>
        <li class="list-group-item">Value the elements of tangible and / or intangible heritage</li>
        <li class="list-group-item">Identify informal or non-normalized uses that generate negative externalities</li>
        <li class="list-group-item">Support the decision making of policies and programs for the management of the phenomenon</li>
      </ul>
      <p style="padding-top: 40px; padding-bottom: 40px;">
        Key subjects:
      </p>
      <ul class="list-group">
        <li class="list-group-item">Public space<!-- (Note: not housing) --></li>
        <li class="list-group-item">Gentrification</li>
        <li class="list-group-item">Tourism</li>
        <li class="list-group-item">Mobility</li>
        <li class="list-group-item">Commerce</li>
      </ul>
     
    </div> <!-- end Event-details -->

    <div class="Faqs-section">          
      <div class="Faqs-header">
        <button class="Faqs-button collapsible">FAQS</button>
      </div> <!-- end Faqs-header -->

      <div class="Faqs-body content">   <!-- debo hacerla que colapse  -->
        <p class="question"> What is a hackathon? </p>
        <p class="answer"> A hackathon is a sprint-like event in which small groups of young professionals search for innovative and creative solutions for everyday problems. The result can be a program, a prototype, a test model, a tool a design solution or a concept. </p>

        <p class="question"> What is Citython Barcelona? </p>
        <p class="answer"> A 3-day hackathon that takes place in Barcelona and brings together creative and inquisitive minds to solve the gentrification problem occurring in the historic centers of Barcelona.  Young professionals from the fields of urbanism and computer and data sciences will be brought together in the same place for fun and an intense session of co-creation, hacking and collaboration. The difference from a typical hackathon is that the Citython requires the analysis of data to understand a problem and reach to a conclusion. </p>

        <p class="question"> What is a TechPill? </p>
        <p class="answer"> A TechPill is a short but definitive training session on a certain topic (usually it lasts an hour). We offer you cutting-edge knowledge about Open Data and data analysis and visualization, so you can come up with the best ideas with the best tools. We will give you knowledge and a full week to think about what you can do! After that, you will be ready to hack. </p>

        <p class="question"> What do I need to bring? </p>
        <p class="answer"> Please, bring the following with you:
        You have to carry with you your own ID during the whole event.
        You do not have to worry about food. We have arranged that. 
        You can bring any device you think you may need in order to develop your projects. (Smartphones and laptops are highly recommended.) </p>

        <p class="question"> What are the requirements to participate? </p>
        <p class="answer"> You have to meet the following requirements: 
        You must be at least 18 years old during the days of the event. 
        You have to apply as an individual on our website. Registration starts 9th October, 2018 and ends 5th November, 2018.
        You must have either data/computer or urbanism background. If you have both, you are also welcome to join. Find out more about the specific skills required for each background on our website. 
        For further information, read our rules and terms. </p>

        <p class="question"> Will any help be provided to develop my project? </p>
        <p class="answer"> Sure! You will be able to attend our TechPills and receive feedback from the appointed mentors during the hack days. </p>
<!--
        <p class="question">   </p>
        <p class="answer">   </p>

        <p class="question">   </p>
        <p class="answer">   </p>

        <p class="question">   </p>
        <p class="answer">   </p>
  -->
      </div> <!-- end Faqs-body -->
        
    </div> <!-- end Faqs-section -->
    
    <div class="Event-location">
      <div class="Map-header">
        <button class="Map-button">MAP</button>
      </div>
    </div> <!-- end Event-location -->
    <div class="Map-place">
      
      <!--carrer de fluvia 22 -->

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.364844128361!2d2.2023697509760374!3d41.4095981430857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3383d57f647%3A0x13bfccddad188a5b!2sCarrer+de+Pere+IV%2C+362%2C+08019+Barcelona!5e0!3m2!1ses!2ses!4v1538310430403" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </iframe>

    </div> <!-- end Map-place -->
  </div> <!-- end Home -->


</template>

<script>
  export default {
    name: 'Cityhon Barcelona 2018',
    data () {
      return {
        msg: 'Citython Barcelona'
      }
    }
}
</script>

<style scoped>

  #Home{
    overflow: scroll;
    background-image: "assets/Logo.png" !important;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .logo-place{

  }
  .logo-itself{
    max-height: 500px;
    max-width: 500px;
  }
  .introduction{
    color: blue;
    position: relative;
    min-height: 15%;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 60px;
    padding-right: 60px;
  }
  .logo-place{

  }
  .Event-details{
    color: blue;
    padding-bottom: 40px;
    padding-left: 60px;
    padding-right: 60px;
  }
  .Faqs-section{
    color: blue;
    padding-bottom: 40px;
  }
  .Faqs-body{
    padding-top: 15px;   
  }
  .question{
    font-weight: bold;
    padding-left: 60px;
    padding-right: 60px;
  }
  .answer{
    color: #5cdaa9;
    padding-bottom: 10px;
    padding-left: 60px;
    padding-right: 60px;
  }
  .Faqs-button{
    background-color: pink;
    color: white;
    border-radius: 5px;
    font-size: 25;
    padding: 15px;
  }
  .Faqs-button:hover{
  /*  font-weight: bold;  */
  }
  .Faqs-button:active{
  /*  font-weight: bold;
    background-color: yellow;  */
  }
  .Event-location{
    color: blue;
    padding-bottom: 40px;
  }
  .Map-button{
    background-color: pink;
    color: white;
    border-radius: 5px;
    font-size: 25;
    padding: 15px;
  }
  .Map-button:hover{
  /*  font-weight: bold;  */
  }
  .Map-button:active{
  /*  font-weight: bold;
    background-color: yellow;  */
  }
  .Map-place{
    min-height: 400px;
    padding-bottom: 40px;
    padding-top: 40px;
  }

</style>
