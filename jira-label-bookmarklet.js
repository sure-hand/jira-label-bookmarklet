(function() {

var ROOT_URL = "https://raw.githubusercontent.com/sure-hand/jira-label-bookmarklet/master/";

var MenuTemplate = function() {
	debugger;
	this.element = document.getElementById("mxMainDiv");
	if (this.element !== null) {
		this.element.parentElement.removeChild(this.element);
	};

	this.element = document.createElement("div");
	this.element.id = "mxMainDiv";
	this.element.innerHTML = ' \
	<div class="modal fade" id="mxMenu" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> \
	<div class="modal-dialog" role="document"> \
	<div class="modal-content"> \
        <div class="modal-header"> \
            <h5 class="modal-title">Docupace Quick Links</h5> \
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"> \
                <span aria-hidden="true">&times;</span> \
            </button> \
        </div> \
        <div class="modal-body"> \
            <div class="divTable"> \
                <div class="divTableHeading"> \
                    <div class="divTableRow"> \
                        <div class="divTableHead">Name</div> \
                        <div class="divTableHead">Connect</div> \
                        <div class="divTableHead">Core</div> \
                    </div> \
                </div> \
                <div class="divTableBody"> \
                    <div class="divTableRow"> \
                        <div class="divTableCell">Cell1</div> \
                        <div class="divTableCell">Cell2</div> \
                        <div class="divTableCell">Cell3</div> \
                    </div> \
                </div> \
            </div> \
        </div>  \
        </div>  \
    </div> \
    </div> \
	';
};
  
function loadCss(url) {
	var el = document.createElement("link");
	el.type = "text/css";
	el.rel = "stylesheet";
	el.href = url;

	var head = document.getElementsByTagName("head")[0];
	head.appendChild(el);
};

function addLink(parent, t, url) {
	var b = parent.appendChild(document.createElement('button'));
	b.outerHTML = '<button onclick="openUrl(event,\'' + url + '\')">' + t + '</button><br>';
}

function addLine(oD) {
	var hr = oD.appendChild(document.createElement('hr'));
	hr.outerHTML = '<hr style="height:1px;border-width:1px 0px 0px 0px;margin:0px 0px 5px 5px"/>';
}
function addText(parent,t, bold) {
	var p = parent.appendChild(document.createElement('p'));
	if (bold) {
		p.outerHTML = '<p<b>' + t + '</b></p>';
	} else {
		p.outerHTML = '<p">' + t + '</p>';
	}
}

function addTableRow(tableBody){
	tr = tableBody.appendChild(document.createElement("div"));
	tr.class = "divTableRow";
	return tr;
}
function openUrl(e,url) {
	document.getElementById("qmOverlay").style.visibility = "hidden";
	if (e.ctrlKey) {
		window.open(url, "_blank");
	} else {
		window.open(url, "_self");
	};
};

function main() {
	loadCss(ROOT_URL + "/jira-label-bookmarklet.css");
	var menuWidget = new MenuTemplate();
	var tableBody =  menuWidget.element.getElementsByClassName("divTableBody");
	//addTableRow(tableBody);
	document.body.appendChild(menuWidget.element);
	$('#mxMenu').modal('show')
};

main(); 
})();