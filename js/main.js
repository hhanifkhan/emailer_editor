//grid template
const gridTemplatesAll = {
	"grid_1" : `
	<i class="handle"></i><span class="structFiltrs"><i class="copyIcon"></i><i class="deleteIcon"></i></span><table cellpadding="0" cellspacing="0" border="0" width="100%">
		<tr>
			<td class="ve_td initialTdClass" ondrop="handleDrop(event,this)" height="100%" data-c="false" width="100%" align="left" bgcolor="#ffffff" valign="middle" ondragover="handleAllowDrop(event)"></td>
		</tr>
	</table>`,
	"grid_2" : `
	<i class="handle"></i><span class="structFiltrs"><i class="copyIcon"></i><i class="deleteIcon"></i></span><table cellpadding="0" cellspacing="0" border="0" width="100%">
		<tr>
			<td width="50%" class="ve_td initialTdClass" ondrop="handleDrop(event,this)" data-c="false" height="100%" width="100%"  bgcolor="" align="left" valign="middle" ondragover="handleAllowDrop(event)"></td>
			<td width="50%" class="ve_td initialTdClass" ondrop="handleDrop(event,this)" data-c="false" height="100%" width="100%"  bgcolor="" align="left" valign="middle" ondragover="handleAllowDrop(event)"></td>
		</tr>
	</table>`,
	"grid_2_1/3" : `
	<i class="handle"></i><span class="structFiltrs"><i class="copyIcon"></i><i class="deleteIcon"></i></span><table cellpadding="0" cellspacing="0" border="0" width="100%">
		<tr>
			<td width="70%" class="ve_td initialTdClass" ondrop="handleDrop(event,this)" data-c="false" height="100%" width="100%" bgcolor="" align="left" valign="middle" ondragover="handleAllowDrop(event)"></td>
			<td width="30%" class="ve_td initialTdClass" ondrop="handleDrop(event,this)" data-c="false" height="100%" width="100%" bgcolor="" align="left" valign="middle" ondragover="handleAllowDrop(event)"></td>
		</tr>
	</table>`,
	"grid_2_3/1" : `
	<i class="handle"></i><span class="structFiltrs"><i class="copyIcon"></i><i class="deleteIcon"></i></span><table cellpadding="0" cellspacing="0" border="0" width="100%">
		<tr>
			<td width="30%" class="ve_td initialTdClass" ondrop="handleDrop(event,this)" data-c="false" height="100%" width="100%" bgcolor="" align="left" valign="middle" ondragover="handleAllowDrop(event)"></td>
			<td width="70%" class="ve_td initialTdClass" ondrop="handleDrop(event,this)" data-c="false" height="100%" width="100%" bgcolor="" align="left" valign="middle" ondragover="handleAllowDrop(event)"></td>
		</tr>
	</table>`,
	"grid_3" : `
	<i class="handle"></i><span class="structFiltrs"><i class="copyIcon"></i><i class="deleteIcon"></i></span><table cellpadding="0" cellspacing="0" border="0" width="100%">
		<tr>
			<td width="33%" class="ve_td initialTdClass" ondrop="handleDrop(event,this)" data-c="false" height="100%" width="100%" bgcolor="" align="left" valign="middle" ondragover="handleAllowDrop(event)"></td>
			<td width="33%" class="ve_td initialTdClass" ondrop="handleDrop(event,this)" data-c="false" height="100%" width="100%" bgcolor="" align="left" valign="middle" ondragover="handleAllowDrop(event)"></td>
			<td width="33%" class="ve_td initialTdClass" ondrop="handleDrop(event,this)" data-c="false" height="100%" width="100%" bgcolor="" align="left" valign="middle" ondragover="handleAllowDrop(event)"></td>
		</tr>
	</table>
	`,
	"grid_4" : `
	<i class="handle"></i><span class="structFiltrs"><i class="copyIcon"></i><i class="deleteIcon"></i></span><table cellpadding="0" cellspacing="0" border="0" width="100%">
		<tr>
			<td width="25%" class="ve_td initialTdClass" ondrop="handleDrop(event,this)" data-c="false" height="100%" width="100%" bgcolor="" align="left" valign="middle" ondragover="handleAllowDrop(event)"></td>
			<td width="25%" class="ve_td initialTdClass" ondrop="handleDrop(event,this)" data-c="false" height="100%" width="100%" bgcolor="" align="left" valign="middle" ondragover="handleAllowDrop(event)"></td>
			<td width="25%" class="ve_td initialTdClass" ondrop="handleDrop(event,this)" data-c="false" height="100%" width="100%" bgcolor="" align="left" valign="middle" ondragover="handleAllowDrop(event)"></td>
			<td width="25%" class="ve_td initialTdClass" ondrop="handleDrop(event,this)" data-c="false" bgcolor="" align="left" valign="middle" ondragover="handleAllowDrop(event)"></td>
		</tr>
	</table>
	`
};
//test
//grid template end
const componentAll={
	"ck_text" : `<p class="editor" ondblclick="makeEditable(event,this)" data-ce="1" class="ve_text" style="    border: 1px solid green;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>`,
	"ck_button" : `<table width="100%" class="tabl_inner"><tr><td><div class="innerFilter"><i class="dragIcon dragInnerContent"></i><i class="copyIcon" onclick="copyInrComponent();"></i><i class="deleteIcon" onclick="removeInrComponent();"></i></div><input type="button" value="Button"  class="ve_button" style="background-color:#000000; color:#ffffff; font-size:16px; text-align:left;"  /></td></tr></table>`,
	"ck_blankrow" : `<p  class="ve_blank" style=" background-color:#ff0000;">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>`,
	"ck_seprator" : `<p  class="ve_seprator" style="border-bottom:2px solid #000000;"></p>`,
	"ck_raw" : `<h1  class="ve_raw editor" ondblclick="makeEditable(event,this)" data-ce="1">Why do we use it?</h1>`,
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
		"atr" : ["bg", "al", "va", "he", "wi"]	
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
						<label class="tab_content_prop__label">
							<input type="text" name="css[${propTo}]" value="${propToVal}">
						</label>
					</span>
				</div>`;

		case "css_color":
			return `<div class="tab_content_prop__item clr">
					<p>${propTo}</p>
					<span>
						<label  class="tab_content_prop__label">
							<input type="color"  name="css[${propTo}]" oninput="getColorNewValue(event)" value="${propToVal}">
						</label>
					</span>
				</div>`;		

		case "attr_normal":
			return `<div class="tab_content_prop__item contentNodes clr">
						<p>${propTo}</p>
						<span>
							<label  class="tab_content_prop__label">
								<input type="text" name="atr[${propTo}]" value="${propToVal}" required />
							</label>
						</span>
					</div>`;

		case "attr_bgcolor":
			return `<div class="tab_content_prop__item contentNodes clr">
						<p>${propTo}</p>
						<span>
							<label  class="tab_content_prop__label">
								<input type="color" name="atr[${propTo}]" oninput="getColorNewValue(event)" value="${propToVal}" />
							</label>
						</span>
					</div>`;

		case "attr_align":

			var createAlignGrp = [];
			createAlignGrp[0] = (propToVal === "left")?'checked':'';
			createAlignGrp[1] = (propToVal === "center")?'checked':'';
			createAlignGrp[2] = (propToVal === "right")?'checked':'';

			return `<div class="tab_content_prop__item clr">
						<p>${propTo}</p>
						<span>
							<label class="tab_content_prop__label">
								<div class="algnGroup">
									<label class="aAlign"><input type="radio" name="atr[${propTo}]" value="left" ${createAlignGrp[0]}  /><i class="aLeft"></i></label>
									<label class="aAlign"><input type="radio" name="atr[${propTo}]" value="center" ${createAlignGrp[1]} /><i class="aCenter"></i></label>
									<label class="aAlign"><input type="radio" name="atr[${propTo}]" value="right" ${createAlignGrp[2]} /><i class="aRight"></i></label>
								</div>
							</label>
						</span>
					</div>`;			

		case "attr_valign":

			var createvAlignGrp = [];
			createvAlignGrp[0] = (propToVal === "top")?'checked':'';
			createvAlignGrp[1] = (propToVal === "middle")?'checked':'';
			createvAlignGrp[2] = (propToVal === "bottom")?'checked':'';

			return `<div class="tab_content_prop__item clr">
						<p>${propTo}</p>
						<span>
							<label class="tab_content_prop__label">
								<div class="algnGroup">
									<label class="aAlign"><input type="radio" name="atr[${propTo}]" value="top" ${createvAlignGrp[0]}  /><i class="vTop"></i></label>
									<label class="aAlign"><input type="radio" name="atr[${propTo}]" value="middle" ${createvAlignGrp[1]} /><i class="vMiddle"></i></label>
									<label class="aAlign"><input type="radio" name="atr[${propTo}]" value="bottom" ${createvAlignGrp[2]} /><i class="vBottom"></i></label>
								</div>
							</label>
						</span>
					</div>`;
								
		default:
			return "";
	}
};

o.toggleClassTdOnFocus = function(a,b){
	document.querySelectorAll(".ve_td").forEach(function(el){
		el.classList.remove(b);
	});
	a.classList.add(b);
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
				o.toggleClassTdOnFocus(e.target,"showHighlightedTd");//adding class
				tm(e,"td_prop");
			}
		}

		//check type of click and action
		function tm(e,image_prop){

			imgCssProp = componentProps[image_prop].css;
			imgAttr = componentProps[image_prop].atr;
			formTemp = `<h3 class="tab_content__h3">PROPERTIES</h3><form name="${e.target.id}">`;
			
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

				if(o.validate(tmpAttrPropVal)){//check attribute exist or not
					// debugger;
					if(tmpAttrProp === "align")
						formTemp += o.genTemplateLogic("attr_align",tmpAttrProp, tmpAttrPropVal);
					else if(tmpAttrProp === "valign")
						formTemp += o.genTemplateLogic("attr_valign",tmpAttrProp, tmpAttrPropVal);
					else if(tmpAttrProp === "bgcolor")
						formTemp += o.genTemplateLogic("attr_bgcolor",tmpAttrProp, tmpAttrPropVal);
					else
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

	//this function will check key name contain whtToChk
	function checkFormName(str,whtToChk){
		return ( str.indexOf(whtToChk) >=0 ) ? ( true ) : ( false );
	}

	//Iterating all css and atr's
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
		//some attributes like valign not supported
		//for that case we are setting here manually
		if(whereToAppedData[k] === undefined)
			whereToAppedData.setAttribute(k,_atrString[k])
		else
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
var drake, arrForNewTds = [];
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
	   moves: function (el, container, handle) {
	    return handle.classList.contains('handle');
	  },
	  accepts: function (el, target,source, sibling) {
	  	// console.log(el,target,source,sibling);
	    return target !== document.getElementById("left");

	  }
	});

	drake.on('drop',function(el, target, source, sibling){
		if(target !== null){
			arrForNewTds = [];
			// console.log("el,source====>");
		 	//  	console.log(el,source, source, sibling);
		  	if(!el.classList.contains("isGridAlreadyAdded")){	
			  	var gridkey = el.getAttribute("data-gridKey");
			  	el.classList = "grid";
			  	el.classList.add("isGridAlreadyAdded");
			  	el.innerHTML = setUniqueIdToEl(o.ve_grids[gridkey]);
			  	if(arrForNewTds.length){
				  	arrForNewTds.forEach(function(e,i){
				  		dragInside.containers.push(document.getElementById(e));
				  	});
			  	}	
		    }

		  	// console.log("el,source,handle,sibling====<");	
	    }
	});
}


//used to set unique_id
function setUniqueIdToEl(dataStr){
	var id = "", arr;
	dataStr = dataStr.replace(/(id="([^"]*?)")/,"");//if already id attr exist then remove it
	arr = dataStr.split(/(class="ve)/g);
	arr.forEach(function(el,i,ar){
		if(el==='class="ve'){
			id = 'id="uid'+(componentProps.counter+=1)+'" ';
			ar[i] = id+el;
			arrForNewTds.push("uid"+componentProps.counter);
			//dragInside.containers.push(document.getElementById("uid"+componentProps.counter));
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
//el=current dragged element
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
  ev.dataTransfer.setData("text/html", newElAfterId); //new content
  ev.dataTransfer.setData("elShouldDragged", true); //restrict drag only from specific function
}

//manage drop
//el=where is the drop position
//ev=
function handleDrop(ev,el){
	if(ev.dataTransfer.getData("elShouldDragged")==="true"){

		//checking already content exist or not on dropzone
		if(el.getAttribute("data-c") === "false"){
			el.setAttribute("data-c","true");
			el.classList.remove("initialTdClass");
		}

		ev.preventDefault();
		console.log("handleDrop===>asdasd");
		console.log(ev,el);
		console.log("<===asdasd");
		var data=ev.dataTransfer.getData("text/html");
	  	console.log(data);
	  	el.innerHTML +=  data;
  }
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




//  dragula([].slice.apply(document.querySelectorAll('.ve_td')),{
//   moves: function (el, container, handle) {
//     return handle.classList.contains('oye');
//   }
// });


//re-arrangement of components inside structured components 
var dragInside=dragula( [], {
	accepts: function (el, target, source, sibling){
    	return target===source;
    },
    moves: function (el, container, handle) {
    	return handle.classList.contains('dragInnerContent');
    }
});


//remove inner component
function  removeInrComponent(){
	var targetEl = event.target.closest("table.tabl_inner");
	if(targetEl !== null)
		targetEl.remove();

	console.log("removed....");
}

//copy inner component
function  copyInrComponent(){
	var el = event.target.closest("table.tabl_inner"),
		cloneEl = el.cloneNode(true);

	if(el !== null){
		cloneEl = setUniqueIdToEl(cloneEl.outerHTML);
		el.insertAdjacentHTML('afterend', cloneEl);
	}

	console.log("copied....");	
}