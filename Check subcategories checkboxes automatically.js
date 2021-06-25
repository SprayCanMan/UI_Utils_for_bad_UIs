javascript:(function(){var thecollection = document.getElementById("ctl00_cphMainContent_ProductGroupTree label");for(var i=0; i < thecollection.length; i++) {if(thecollection[i].querySelector("span.rtIn").textContent == "Marketing Materials"){thecollection[i].querySelector("input.rtChk").click();}}})();
var thecollection = document.getElementById("ctl00_cphMainContent_ProductGroupTree").querySelectorAll("label");for(var i=0; i < thecollection.length; i++) {if(thecollection[i].querySelector("span.rtIn").textContent == "Marketing Materials"){thecollection[i].querySelector("input.rtChk").click();}}



<div id="containerELementAlwaysHasThisID">
  <ul>
    <li>
      <ul>
        <li>
          <ul>
            <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
            <li><<label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label>/li>
            <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
          </ul>
        </li>
        <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
        <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
        <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
        <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
        <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
      </ul>
    </li>
    <li>
      <ul>
      <li>
          <ul>
            <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
            <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
            <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
          </ul>
        </li>
        <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
        <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
        <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
        <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
        <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
      </ul>
    </li>
    <li>
      <ul>
      <li>
          <ul>
            <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
            <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
            <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
          </ul>
        </li>
        <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
        <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
        <li><label><input class="inputAlwaysHasThisClassName"><span class="LabelAlwaysHasThisClassName"></span></label></li>
      </ul>
    </li>
  </ul>
</div>