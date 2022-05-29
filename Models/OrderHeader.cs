﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class OrderHeader
    {
        [Key]
        public int  Id { get; set; }
        public string ApplicationUserId { get; set; }
        [ForeignKey("ApplicationUserId")]
        public ApplicationUser ApplicationUser { get; set; }
        [Required]
        public DateTime OrderDate { get; set; }
        [Required]
        public double OrderTotal { get; set; }
        public string OrderStatus { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Adres { get; set; }
        [Required]
        public string Semt { get; set; }
        [Required]
        public string Sehir { get; set; }      
        [Required]
        public string PostaKodu { get; set; }
        [Required]
        public string CartName { get; set; }
        [Required]
        public string CartNumber { get; set; }   
        [Required]
        public string ExprationMonth { get; set; }
        [Required]
        public string ExprationYear { get; set; }
        [Required]
        public string Cvc { get; set; }
    }
}
