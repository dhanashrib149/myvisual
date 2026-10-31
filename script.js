const steps = [
 {title:"VPC and network",short:"Create an isolated network",heading:"Create a VPC",icon:"🌐",text:"A VPC gives your AWS resources an isolated network. The example CIDR range 10.0.0.0/16 provides private IP space for subnets and database resources.",nodes:["igw"]},
 {title:"Availability Zones",short:"Spread resources across zones",heading:"Choose Availability Zones",icon:"🏢",text:"Use at least two Availability Zones for a resilient DB subnet group. Multi-AZ deployments can keep a standby database in a separate zone.",nodes:["db","standby"]},
 {title:"DB subnets",short:"Create private database subnets",heading:"Create private subnets",icon:"🧩",text:"Create private subnets in separate Availability Zones and add them to a DB subnet group. The database should not need a public IP address.",nodes:["db","standby"]},
 {title:"Security group",short:"Restrict database connections",heading:"Control access with a security group",icon:"🔒",text:"Allow inbound database traffic only from the application tier's security group. Use the engine's port: 3306 for MySQL/MariaDB or 5432 for PostgreSQL.",nodes:["db","app"],security:true},
 {title:"RDS database",short:"Choose engine and instance",heading:"Launch an Amazon RDS DB",icon:"🗄️",text:"Choose an engine, instance class, storage, credentials and maintenance settings. For a private architecture, set Public access to No and select the DB subnet group.",nodes:["db"],security:true},
 {title:"Multi-AZ",short:"Add high availability",heading:"Enable Multi-AZ",icon:"🔁",text:"A Multi-AZ DB instance maintains a synchronous standby in another Availability Zone for failover. The standby is for availability, not read scaling.",nodes:["db","standby"],security:true},
 {title:"Backups",short:"Protect and restore data",heading:"Configure backups and snapshots",icon:"☁️",text:"Set an automated backup retention period that meets your recovery needs. Manual snapshots can be retained independently; test restore procedures regularly.",nodes:["db"],backup:true},
 {title:"Application connection",short:"Connect the app privately",heading:"Connect the application",icon:"🔌",text:"The application connects to the RDS endpoint using the database port and credentials stored securely, for example in AWS Secrets Manager. Do not expose the database directly to the internet.",nodes:["app","db"],security:true,connection:true}
];
let current=0;
const stepsEl=document.getElementById("steps");
function render(){
 stepsEl.innerHTML="";
 steps.forEach((s,i)=>{
  const b=document.createElement("button"); b.className="step"+(i===current?" active":"");
  b.innerHTML=`<span class="num">${i+1}</span><span><b>${s.title}</b><small>${s.short}</small></span>`;
  b.addEventListener("click",()=>{current=i;render()}); stepsEl.appendChild(b);
 });
 const s=steps[current];
 document.getElementById("canvasTitle").textContent=s.title;
 document.getElementById("stepCount").textContent=`STEP ${current+1} / ${steps.length}`;
 document.getElementById("detailIcon").textContent=s.icon;
 document.getElementById("detailTitle").textContent=s.heading;
 document.getElementById("detailText").textContent=s.text;
 document.getElementById("prevBtn").disabled=current===0;
 document.getElementById("nextBtn").textContent=current===steps.length-1?"Start again ↻":"Next step →";
 document.querySelectorAll(".node").forEach(n=>n.classList.toggle("active",s.nodes.includes(n.dataset.node)));
 document.getElementById("security").style.borderColor=s.security?"#ffce65":"#6483a5";
 document.getElementById("backup").style.borderColor=s.backup?"#ffce65":"#6483a5";
 document.getElementById("lineAppDb").classList.toggle("visible",!!s.connection);
 document.getElementById("lineDbStandby").classList.toggle("visible",current===5);
}
document.getElementById("prevBtn").addEventListener("click",()=>{if(current>0){current--;render()}});
document.getElementById("nextBtn").addEventListener("click",()=>{current=(current+1)%steps.length;render()});
document.getElementById("themeBtn").addEventListener("click",()=>document.body.classList.toggle("dark"));
render();