$(function(){
  // Update text fields
  $("#name").on("input",()=>$("#p_name").text($("#name").val()||"Your Name"));
  $("#title").on("input",()=>$("#p_title").text($("#title").val()||"Job Title"));
  $("#email").on("input",()=>$("#p_email").text($("#email").val()||"email@example.com"));
  $("#phone").on("input",()=>$("#p_phone").text($("#phone").val()||"+91 1234567890"));
  $("#summary").on("input",()=>$("#p_summary").text($("#summary").val()||"Write a short professional summary here..."));
  
  $("#skills").on("input",()=>{
    const skills = $("#skills").val().split(",");
    const $ul = $("#p_skills ul").empty();
    skills.forEach(s=>{ if(s.trim()) $ul.append("<li>"+s.trim()+"</li>"); });
  });

  // Add Education
  $("#addEducation").click(()=>{
    $("#educationList").append(`
      <div class="edu-item mb-2 p-2 border rounded">
        <input type="text" class="form-control mb-1 edu-degree" placeholder="Degree"/>
        <input type="text" class="form-control mb-1 edu-inst" placeholder="Institution"/>
        <input type="text" class="form-control mb-1 edu-year" placeholder="Year"/>
        <button type="button" class="btn btn-sm btn-danger remove-edu">Remove</button>
      </div>
    `);
  });

  // Add Experience
  $("#addExperience").click(()=>{
    $("#experienceList").append(`
      <div class="exp-item mb-2 p-2 border rounded">
        <input type="text" class="form-control mb-1 exp-role" placeholder="Role"/>
        <input type="text" class="form-control mb-1 exp-comp" placeholder="Company"/>
        <input type="text" class="form-control mb-1 exp-year" placeholder="Years"/>
        <textarea class="form-control mb-1 exp-desc" placeholder="Description"></textarea>
        <button type="button" class="btn btn-sm btn-danger remove-exp">Remove</button>
      </div>
    `);
  });

  // Dynamic update
  $(document).on("input",".edu-item input",updateEducation);
  $(document).on("click",".remove-edu",function(){ $(this).closest(".edu-item").remove(); updateEducation(); });
  $(document).on("input",".exp-item input,.exp-item textarea",updateExperience);
  $(document).on("click",".remove-exp",function(){ $(this).closest(".exp-item").remove(); updateExperience(); });

  function updateEducation(){
    const $ul = $("#p_education ul").empty();
    $(".edu-item").each(function(){
      const degree=$(this).find(".edu-degree").val();
      const inst=$(this).find(".edu-inst").val();
      const year=$(this).find(".edu-year").val();
      if(degree||inst||year) $ul.append(`<li><strong>${degree}</strong>, ${inst} (${year})</li>`);
    });
  }

  function updateExperience(){
    const $ul = $("#p_experience ul").empty();
    $(".exp-item").each(function(){
      const role=$(this).find(".exp-role").val();
      const comp=$(this).find(".exp-comp").val();
      const year=$(this).find(".exp-year").val();
      const desc=$(this).find(".exp-desc").val();
      if(role||comp||year||desc) $ul.append(`<li><strong>${role}</strong> at ${comp} (${year})<br><small>${desc}</small></li>`);
    });
  }

  // PDF Download
  $("#downloadBtn").click(()=>{ window.print(); });
});
