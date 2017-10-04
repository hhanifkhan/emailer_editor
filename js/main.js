//grid template
const gridTemplatesAll = {
	"grid_1" : `
	<table cellpadding="0" cellspacing="0" border="0" width="100%">
		<tr>
			<td class="ve_td" ondrop="handleDrop(event,this)" align="left" ondragover="handleAllowDrop(event)"></td>
		</tr>
	</table>`,
	"grid_2" : `
	<table cellpadding="0" cellspacing="0" border="0" width="100%">
		<tr>
			<td width="50%" class="ve_td" ondrop="handleDrop(event,this)" ondragover="handleAllowDrop(event)"></td>
			<td width="50%" class="ve_td" ondrop="handleDrop(event,this)" ondragover="handleAllowDrop(event)"></td>
		</tr>
	</table>`,
	"grid_2_1/3" : `
	<table cellpadding="0" cellspacing="0" border="0" width="100%">
		<tr>
			<td width="70%" class="ve_td" ondrop="handleDrop(event,this)" ondragover="handleAllowDrop(event)"></td>
			<td width="30%" class="ve_td" ondrop="handleDrop(event,this)" ondragover="handleAllowDrop(event)"></td>
		</tr>
	</table>`,
	"grid_2_3/1" : `
	<table cellpadding="0" cellspacing="0" border="0" width="100%">
		<tr>
			<td width="30%" class="ve_td" ondrop="handleDrop(event,this)" ondragover="handleAllowDrop(event)"></td>
			<td width="70%" class="ve_td" ondrop="handleDrop(event,this)" ondragover="handleAllowDrop(event)"></td>
		</tr>
	</table>`,
	"grid_3" : `
	<table cellpadding="0" cellspacing="0" border="0" width="100%">
		<tr>
			<td width="33%" class="ve_td" ondrop="handleDrop(event,this)" ondragover="handleAllowDrop(event)"></td>
			<td width="33%" class="ve_td" ondrop="handleDrop(event,this)" ondragover="handleAllowDrop(event)"></td>
			<td width="33%" class="ve_td" ondrop="handleDrop(event,this)" ondragover="handleAllowDrop(event)"></td>
		</tr>
	</table>
	`,
	"grid_4" : `
	<table cellpadding="0" cellspacing="0" border="0" width="100%">
		<tr>
			<td width="25%" class="ve_td" ondrop="handleDrop(event,this)" ondragover="handleAllowDrop(event)"></td>
			<td width="25%" class="ve_td" ondrop="handleDrop(event,this)" ondragover="handleAllowDrop(event)"></td>
			<td width="25%" class="ve_td" ondrop="handleDrop(event,this)" ondragover="handleAllowDrop(event)"></td>
			<td width="25%" class="ve_td" ondrop="handleDrop(event,this)" ondragover="handleAllowDrop(event)"></td>
		</tr>
	</table>
	`
};

//grid template end
const componentAll={
	"ck_text" : `<p class="editor" ondblclick="makeEditable(event,this)" data-ce="1">Hello Hi Pakiya !!</p>`,
	"ck_button" : `<input type="button" value="Button"  class="ve_button" style="background-color:#000000; color:#ffffff; font-size:16px; text-align:left;"  />`,
	"ck_blankrow" : `<p style=" background-color:#ff0000;">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>`,
	"ck_seprator" : `<p style="border-bottom:2px solid #000000;"></p>`,
	"ck_raw" : `<h1  class="editor" ondblclick="makeEditable(event,this)" data-ce="1">Why do we use it?</h1>`,
	"ck_image" : `<img src="https://images5.alphacoders.com/637/thumb-1920-637668.jpg" class="ve_image" alt="this is image" width="100%" style="    border: 1px solid green;
    color: red;
    font-size: 10px;
    height: auto;
    width: 100%;" />`

};

//component
const componentProps={
	"counter" : 0,
	"css_rules" : {
		fm : "font-family",
		fs : "font-size",
		co : "color",
		fw : "font-weight",
		lh : "line-height",
		ta : "text-align",
		td : "text-decoration",
		bg : "background-color",
		bo : "border",
		he : "height",
		wi : "width",
		mw : "max-width",
		dp : "display"
	},
	"attrib" : {
		at : "alt",
		al : "align",
		va : "valign",
		wi : "width",
		he : "height",
		ce : "cellpadding",
		cs : "cellspacing",
		bg : "bgcolor",
		hr : "href",
		tr : "target",
		sr : "src",
		val : "value"

	},
	"image_prop" : { 
		"css" : ["co", "wi", "he", "bo", "ta"],
		"atr" : ["sr","at"]
	},
	"button_prop" : {
		"css" : ["co", "bg", "fs"],
		"atr" : ["val"]	
	},
	"td_prop" : {
		"css" : ["co", "fs"],
		"atr" : ["bg", "al", "he", "wi"]	
	}
};

//component end

var o={
	ve_Wrapper : document.querySelector(".wrapper"),
	ve_grids : gridTemplatesAll
};


//tabs toggle code
o.tabs = document.querySelectorAll(".tabs a"); 
o.contentAllDiv = document.querySelectorAll(".tab_content"); 
o.filterOption = function(){
	o.tabs.forEach(function(c,i,a){
		c.addEventListener('click',function(){
			document.querySelectorAll(".attrPropContainer")[0].classList.remove("isActive");
			var targetContentID = this.getAttribute('data-id');
			o.tabs.forEach(function(c2,i2,a2){
				c2.removeAttribute("class");
			});
			this.classList.add('isactiveTab');
			o.contentAllDiv.forEach(function(c3,i3,a3){
				c3.removeAttribute("style");
			});
			document.getElementById(targetContentID).style.display="block";
		});
	});
};

//validate user input for components
o.validate = function(elementToValidate){
	return (elementToValidate === null || elementToValidate === "") ? false : true;
};

//set color change value
function getColorNewValue(event){
	console.log(event.target.value);
	// alert();
	// alert(event.target.value);
}

//generate templates
o.genTemplateLogic = function(whatTodo,propTo, propToVal){
	switch (whatTodo) {
		case "css_normal":
			return `<div class="tab_content_prop__item clr">
					<p>${propTo}</p>
					<span>
						<label>
							<input type="text" name="css[${propTo}]" value="${propToVal}">
						</label>
					</span>
				</div>`;

		case "css_color":
			return `<div class="tab_content_prop__item clr">
					<p>${propTo}</p>
					<span>
						<label>
							<input type="color"  name="css[${propTo}]" oninput="getColorNewValue(event)" value="${propToVal}">
						</label>
					</span>
				</div>`;		

		case "attr_normal":
			return `<div class="tab_content_prop__item contentNodes clr">
						<p>${propTo}</p>
						<span>
							<label>
								<input type="text" name="atr[${propTo}]" value="${propToVal}" required />
							</label>
						</span>
					</div>`;

		default:
			return "";
	}
};

//when user click on element
//It shows component layer element that can be manipulated here
o.initImageEdit = function(){
	document.querySelector("body").addEventListener("click",function(e){
		var imgCssProp = "", imgAttr = "", formTemp = "";

		//checking click exist or not
		if(e.target){
			if(e.target.matches(".ve_image")){
				tm(e,"image_prop");
			}
			else if(e.target.matches(".ve_button")){
				tm(e,"button_prop");
			}
			else if(e.target.matches(".ve_td")){
				tm(e,"td_prop");
			}
		}

		//check type of click and action
		function tm(e,image_prop){

			imgCssProp = componentProps[image_prop].css;
			imgAttr = componentProps[image_prop].atr;
			formTemp = `<h3 class="tab_content__h3">PROPERTIES</h3><form name="${e.target.id}">`;
			debugger;
			//toggle component panel
			document.querySelectorAll(".attrPropContainer")[0].classList.toggle("isActive");	

			//loop all css props
			imgCssProp.forEach(function(element, index) {
				var tmpCssProp = componentProps.css_rules[element].toString(),
					tmpCssPropVal = e.target.style[tmpCssProp];
				console.log(tmpCssPropVal);

				
				if(tmpCssProp === "color" || tmpCssProp === "background-color")
					formTemp += o.genTemplateLogic("css_color",tmpCssProp, tmpCssPropVal);
				else
					formTemp += o.genTemplateLogic("css_normal",tmpCssProp, tmpCssPropVal);

			});

			//add update button
			formTemp += `<input type="submit" onclick="renderUpdatedData(event,'${e.target.id}')" value="Update" class="btnUpdate" />`;

			formTemp += `<h3 class="tab_content__h3">CONTENT</h3>`;

			//loop all attribute
			imgAttr.forEach(function(element, index) {
				var tmpAttrProp = componentProps.attrib[element].toString().toLowerCase(),
					tmpAttrPropVal = e.target.getAttribute(tmpAttrProp);
				console.log(tmpAttrPropVal);
				if(o.validate(tmpAttrPropVal)){//check attribute exist or not
					formTemp += o.genTemplateLogic("attr_normal",tmpAttrProp, tmpAttrPropVal);
				}
			});
			formTemp += `</form>`;

			//inject to dom element
			document.getElementById("showAllProp").innerHTML = formTemp;
			console.log(imgAttr);

		}

	})
};


//update click() it re-render updated element data
function renderUpdatedData(event,formName){
	event.preventDefault();

	//handle css 
	var _elProps = document.forms[formName].elements,
		_cssString ="", _atrString = {},
		whereToAppedData = document.getElementById(formName);

	function checkFormName(str,whtToChk){
		return ( str.indexOf(whtToChk) >=0 ) ? ( true ) : ( false );
	}

	for(var key in _elProps){
		if(checkFormName(key,"css")){
			_cssString += key.match(/\[(.*?)\]/)[1] +":"+ _elProps[key].value+";";
		}
		else if(checkFormName(key,"atr")){
			// _atrString += key.match(/\[(.*?)\]/)[1] +'='+ _elProps[key].value+',';
			var newKeyTemp = key.match(/\[(.*?)\]/)[1];
			_atrString[newKeyTemp] = _elProps[key].value;
		}
	}	

	console.log(_cssString);
	console.log(_atrString);

	//add css string to dom
	whereToAppedData.style.cssText = _cssString;

	//add attribute string to dom
	for(var k in _atrString){
		whereToAppedData[k] = _atrString[k];		
	}

}

o.init=function(){
	o.filterOption();
	o.initDragula();
	o.initImageEdit();
	//o.addNewTemplate();
};



//----copy on drag from right panel to left------------
//left==what drag,right=where drop
var drake;
o.initDragula = function(){
	drake = dragula([document.getElementById("left"), document.getElementById("right")], {
	  copy: function (el, source, handle, sibling) {
	  	// console.log("el,source====>");
	  	// console.log(el,source);
	  	// console.log("el,source,handle,sibling====<");	
	  	// var gridkey = el.getAttribute("data-gridKey");
	  	// el.classList.add("hanif");
	  	// el.classList = "grid";
	  	//el.innerHTML = o.ve_grids[gridkey];
	    return source === document.getElementById("left");

	  },
	  accepts: function (el, target,source, sibling) {
	  	// console.log(el,target,source,sibling);
	    return target !== document.getElementById("left");

	  }
	});

	drake.on('drop',function(el, target, source, sibling){
		// console.log("el,source====>");
	 //  	console.log(el,source, source, sibling);
	  	if(!el.classList.contains("isGridAlreadyAdded")){	
		  	var gridkey = el.getAttribute("data-gridKey");
		  	el.classList = "grid";
		  	el.classList.add("isGridAlreadyAdded");
		  	el.innerHTML = setUniqueIdToEl(o.ve_grids[gridkey]);
	    }
	  	// console.log("el,source,handle,sibling====<");	
	});
}


//used to set unique_id
function setUniqueIdToEl(dataStr){
	var id = "", arr;
	
	arr = dataStr.split(/(class="ve)/g);
	arr.forEach(function(el,i,ar){
		if(el==='class="ve'){
			id = 'id="uid'+(componentProps.counter+=1)+'" ';
			ar[i] = id+el;
		}
	});
	return arr.join("");

}

//**component drag and drop**//

//manage default
function handleAllowDrop(ev){
	ev.preventDefault();
}

//manage default
function allowDrop(ev) {
  ev.preventDefault();
}

//manage drag
function drag(ev,el) {
	console.log("drag wala event");
	console.log(el);
	console.log(el.getAttribute("data-componentKey"));
	console.log(ev);
	console.log(ev.srcElement.getAttribute("id"));
	var getComponentKey = el.getAttribute("data-componentKey");

	var position = componentAll[getComponentKey].indexOf('class="ve'),
		currentCounter = id = newElAfterId = "";

	id = 'id="uid'+(componentProps.counter+=1)+'" ';
	newElAfterId = componentAll[getComponentKey].substr(0, position) + id + componentAll[getComponentKey].substr(position);

  // ev.dataTransfer.setData("text/html", ev.target.id);
  ev.dataTransfer.setData("text/html", newElAfterId);
}

//manage drop
function handleDrop(ev,el){
	ev.preventDefault();
	console.log("handleDrop===>asdasd");
	console.log(ev,el);
	console.log("<===asdasd");
	var data=ev.dataTransfer.getData("text/html");
  	console.log(data);
  	el.innerHTML +=  data;

}

//**component drag and drop ends**//


o.init();


//on element onplace editor
function makeEditable(e,t){

	var elements = document.querySelectorAll('.editor'),
    editor = new MediumEditor(elements, {
    toolbar: {
        buttons: ['bold', 'italic', 'underline', 'anchor', 'image',
         'strikethrough','orderedlist','unorderedlist','justifyLeft','justifyCenter','justifyRight','justifyFull',
         'html'
         ]
    }
});
}