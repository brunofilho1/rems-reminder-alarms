using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using RemsReminderAlarms.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RemsReminderAlarms.Pages
{
    public class FormModel : PageModel
    {
        [BindProperty]
        public CreateUserViewModel FormData { get; set; }

        public string Message { get; set; }

        public IActionResult OnPost()
        {
            if (ModelState.IsValid)
            {
                Message = "Form was posted successfully";
            }
            return Page();
        }
    }
}