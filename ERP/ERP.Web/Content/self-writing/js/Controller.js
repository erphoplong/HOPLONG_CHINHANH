
app.controller('hanghoaCtrl', function (hanghoaService, $scope) {
    $scope.loadHangHoa = function () {
        hanghoaService.get_hanghoa().then(function (d) {
            $scope.danhsachhanghoa = d;
        });
        hanghoaService.get_nhomhang().then(function (a) {
            $scope.danhsachnhomhang = a;
        });
    };

    $scope.loadQuanTam = function () {
        var quantam = $('#userquantam').val();
        hanghoaService.get_quantam(quantam).then(function (z) {
            $scope.danhsachquantam = z;
        });
    }
    $scope.loadQuanTam();
    $scope.loadHangHoa();
    

    $scope.add = function () {
        $("textarea[name=thongso]").val(CKEDITOR.instances.thongso.getData());
        $("textarea[name=donggoi]").val(CKEDITOR.instances.donggoi.getData());
        var thongso = $("[name=thongso]").val();
        var donggoi = $("[name=donggoi]").val();
        var data_add = {
            MA_HANG: $scope.mahang,
            TEN_HANG: $scope.tenhang,
            MA_NHOM_HANG: $scope.manhomhang,
            KHOI_LUONG: $sopce.khoiluong,
            XUAT_XU: $scope.xuatxu,
            THONG_SO_KY_THUAT: thongso,
            QUY_CACH_DONG_GOI: donggoi,
            BAO_HANH: $scope.baohanh,
            DON_VI_TINH: $scope.donvitinh,
            HINH_ANH: $scope.hinhanh,
            GHI_CHU: NoiDungTextArea,
            TK_HACH_TOAN_KHO: $scope.tkhachtoankho,
            TK_DOANH_THU: $scope.tkdoanhthu,
            TK_CHI_PHI: $scope.tkchiphi
        }
        hanghoaService.add(data_add).then(function (response) {
            $scope.loadHangHoa();
        });
    }

    $scope.edit = function (item) {
        $scope.item = item;
        var donggoivalue = $('.' + item.MA_HANG + '-1').html();
        CKEDITOR.instances.editdonggoi.setData(donggoivalue);
        var thongsovalue = $('.' + item.MA_HANG + '-2').html();
        CKEDITOR.instances.editthongso.setData(thongsovalue);
    }
    $scope.change = function (z) {
        $scope.z = z;

    }

    $scope.passing = function (item) {
        $scope.item = item;
    }

    $scope.save = function (mahang) {
        $("textarea[name=editthongso]").val(CKEDITOR.instances.editthongso.getData());
        $("textarea[name=editdonggoi]").val(CKEDITOR.instances.editdonggoi.getData());
        var thongso = $("[name=editthongso]").val();
        var donggoi = $("[name=editdonggoi]").val();
        var data_update = {
            MA_HANG: $scope.item.MA_HANG,
            TEN_HANG: $scope.item.TEN_HANG,
            MA_NHOM_HANG: $scope.item.MA_NHOM_HANG,
            KHOI_LUONG: $scope.item.KHOI_LUONG,
            XUAT_XU: $scope.item.XUAT_XU,
            THONG_SO_KY_THUAT: thongso,
            QUY_CACH_DONG_GOI: donggoi,
            BAO_HANH: $scope.item.BAO_HANH,
            DON_VI_TINH: $scope.item.DON_VI_TINH,
            HINH_ANH: $scope.item.HINH_ANH,
            GHI_CHU: $scope.item.GHI_CHU,
            TK_HACH_TOAN_KHO: $scope.item.TK_HACH_TOAN_KHO,
            TK_DOANH_THU: $scope.item.TK_DOANH_THU,
            TK_CHI_PHI: $scope.item.TK_CHI_PHI
        }
        hanghoaService.save(mahang, data_update).then(function (response) {
            $scope.loadHangHoa();
        });
    }

    $scope.delete = function (mahang) {
        var data_delete = {
            MA_HANG: mahang
        }
        hanghoaService.delete(mahang, data_delete).then(function (response) {
            $scope.loadHangHoa();
        });
    };
    $scope.get_tonkho = function (id) {
        hanghoaService.get_hangtonkho(id).then(function (a) {
            $scope.danhsachtonkho = a;
        });
    };
    $scope.get_tonkho();
    $scope.getTotal = function (type) {
        var total = 0;
        angular.forEach($scope.danhsachtonkho, function (el) {
            total += el[type];
        });
        return total;
    };
});



app.controller('giamdocCtrl', function (giamdocService,$scope) {
    $scope.push = function (username) {
        giamdocService.get_giamdoc(username).then(function (a) {
            $scope.listgiamdoc = a;
        });
    };
});

app.controller('hangspCtrl', function (hangspService, $scope) {
    $scope.loadHangSP = function () {
        hangspService.get_hangsp().then(function (a) {
            $scope.danhsachsp = a;
        });
    };
    $scope.loadHangSP();

    $scope.whatclass = function (somevalue) {
        if (somevalue != null) {
            return "text-center"
        }
    };
});

app.controller('khoCtrl', function (khoService, $scope) {
    $scope.loadKho = function () {
        khoService.get_kho().then(function (a) {
            $scope.danhsachkho = a;
        });
    };
    $scope.loadKho();

    $scope.add = function () {
        var data_add = {
            MA_KHO: $scope.makho,
            TEN_KHO: $scope.tenkho,
            DIA_CHI_KHO: $scope.diachikho,
            MA_KHO_CHA: $scope.makhocha,
            TRUC_THUOC: "TAHCM",
            GHI_CHU: $scope.ghichu,
        }
        khoService.add(data_add).then(function (response) {
            $scope.loadKho();
        });
    }

    $scope.edit = function (item) {
        $scope.item = item;
    }

    $scope.save = function (makho) {
        var data_update = {
            MA_KHO: $scope.item.MA_KHO,
            TEN_KHO: $scope.item.TEN_KHO,
            DIA_CHI_KHO: $scope.item.DIA_CHI_KHO,
            MA_KHO_CHA: $scope.item.MA_KHO_CHA,
            TRUC_THUOC: "TAHCM",
            GHI_CHU: $scope.item.GHI_CHU,
        }
        khoService.save(makho, data_update).then(function (response) {
            $scope.loadKho();
        });
    }

    $scope.delete = function (makho) {
        var data_delete = {
            MA_KHO: makho
        }
        khoService.delete(makho, data_delete).then(function (response) {
            $scope.loadKho();
        });
    };
});

app.controller('userCtrl', function (userService, $scope) {
    $scope.loadUser = function () {
        userService.get_user().then(function (a) {
            $scope.danhsachuser = a;
        });
    };


    $scope.loadUser();


    $scope.add = function () {
        var data_add = {
            USERNAME: $scope.username,
            PASSWORD: $scope.password,
            HO_VA_TEN: $scope.hovaten,
            SDT: $scope.sdt,
            EMAIL: $scope.email,
            IS_ADMIN: $scope.admin,
            ALLOWED: $scope.allowed,
            MA_CONG_TY: "TAHCM",
        }
        userService.add(data_add).then(function (response) {
            $scope.loadUser();
            var nhanvien_add = {
                USERNAME: $scope.username,
                GIOI_TINH: $scope.gioitinh,
                NGAY_SINH: $scope.ngaysinh,
                QUE_QUAN: $scope.quequan,
                TRINH_DO_HOC_VAN: $scope.trinhdohocvan,
                MA_PHONG_BAN: $scope.maphongban
            }
            userService.add_nhanvien(nhanvien_add).then(function (response) {
                $scope.loadUser();
            });
        });
    }

    $scope.edit = function (item) {
        $scope.item = item;
    }

    $scope.update_nv = function (nhanvien) {
        $scope.nhanvien = nhanvien;
    }

    $scope.save = function (username) {
        var data_update = {
            ID: username,
            USERNAME: $scope.item.USERNAME,
            PASSWORD: $scope.item.PASSWORD,
            HO_VA_TEN: $scope.item.HO_VA_TEN,
            SDT: $scope.item.SDT,
            EMAIL: $scope.item.EMAIL,
            IS_ADMIN: $scope.item.IS_ADMIN,
            ALLOWED: $scope.item.ALLOWED,
            MA_CONG_TY: "TAHCM",
        }
        userService.save(username, data_update).then(function (response) {
            $scope.loadUser();
            var nhanvien_update = {
                USERNAME: $scope.item.USERNAME,
                GIOI_TINH: $scope.nhanvien.GIOI_TINH,
                NGAY_SINH: $scope.nhanvien.NGAY_SINH,
                QUE_QUAN: $scope.nhanvien.QUE_QUAN,
                TRINH_DO_HOC_VAN: $scope.nhanvien.TRINH_DO_HOC_VAN,
                MA_PHONG_BAN: $scope.nhanvien.MA_PHONG_BAN
            }
            userService.save_nhanvien(username, nhanvien_update).then(function (response) {
                $scope.loadUser();
            });
        });
    };
});

app.controller('nhanvienCtrl', function (nhanvienService, $scope) {
    $scope.get_nhanvien = function (username) {
        nhanvienService.get_nhanvien(username).then(function (d) {
            $scope.nhanvien = d;
        });
    };
});

app.controller('phongbanCtrl', function (phongbanService,$scope) {
    $scope.loadPhongban = function () {
        phongbanService.get_phongban().then(function (a) {
            $scope.danhsachphongban = a;
        });
    };

    $scope.loadPhongban();

    $scope.add = function () {
        var data_add = {
            MA_PHONG_BAN: $scope.ma_phong_ban,
            TEN_PHONG_BAN: $scope.tenphongban,
            SDT: $scope.sdt,
            MA_CONG_TY: $scope.macongty,
            GHI_CHU : $scope.ghichu
        }
        phongbanService.add(data_add).then(function (response) {
            $scope.loadPhongban();
        });
    }

    $scope.pass = function (nhanvien) {
        $scope.nhanvien = nhanvien;
    }


    $scope.edit = function (item) {
        $scope.item = item;
    }


    $scope.save = function (maphongban) {
        var data_update = {
            MA_PHONG_BAN: $scope.item.MA_PHONG_BAN,
            TEN_PHONG_BAN: $scope.item.TEN_PHONG_BAN,
            SDT: $scope.item.SDT,
            MA_CONG_TY: "TAHCM",
            GHI_CHU: $scope.item.GHI_CHU,
        }
        phongbanService.save(maphongban, data_update).then(function (response) {
            $scope.loadPhongban();
        });
    };

    $scope.delete = function (maphongban) {
        var data_delete = {
            MA_PHONG_BAN: maphongban,
        }
        phongbanService.delete(maphongban).then(function (response) {
            $scope.loadPhongban();
        });
    };

    $scope.get_listnhanvien = function (maphongban) {
        phongbanService.get_nhanvien(maphongban).then(function (d) {
            $scope.listnhanvien = d;
        });
    };

});



app.controller('taikhoanCtrl', function (taikhoanService, $scope) {
    $scope.loadTaikhoan = function () {
        taikhoanService.get_taikhoan().then(function (a) {
            $scope.danhsachtk = a;
        });
    };

    $scope.loadTaikhoan();

    $scope.whatclass = function (somevalue) {
        if (somevalue != null) {
            return "text-center"
        }
    };
});

app.controller('danhmucCtrl', function (danhmucService,$scope) {
    $scope.loadDanhMuc = function () {
        danhmucService.get_danhmuc().then(function (a) {
            $scope.danhsachdanhmuc = a;
        });
    };
   

    $scope.loadDanhMuc();
    $scope.checked_fruits = [];
     function uploadfile()
    {
        if(window.FormData!==undefined)
        {
            var fileUpload = $("#imgInp").get(0);
            var files = fileUpload.files;
            //Tạo một đối tượng form data
            var filedata = new FormData();
            filedata.append("filename", files[0]);
            $.ajax(
                {
                    url: '/Content/Upload',
                    type: 'POST',
                    contentType: false,
                    processData: false,
                    data: filedata,
                    success:function(result)
                    {
      
                    },error: function(err)
                    {
                        alert(err.statusText);
                    }
                }
                );

        }
        else
        {
            alert("FormData không hỗ trợ");
        }
    }
    $scope.save = function () {
        var a = $('#imgInp').val();
        var name_without_ext = (a.split('\\').pop().split('/').pop().split())[0];
        $("textarea[name=noidung]").val(CKEDITOR.instances.noidung.getData());
        var danhmuc = $("[name=noidung]").val();
        var username = $('#username').val();
        var data_add = {
            TIEU_DE_BAI_VIET: $scope.tieude,
            NOI_DUNG_BAI_VIET: danhmuc,
            ANH_BAI_VIET: name_without_ext,
            NGUOI_DANG_BAI: username,
        }
        danhmucService.add_danhmuc(data_add).then(function (response) {
            
           
            var postcate = {
                tieu_de_bai_viet: $scope.tieude,
                ma_danh_muc: $scope.checked_fruits[0]
            }
            danhmucService.add_postcategories(postcate).then(function (response) {
                $scope.loadDanhMuc();
            });
        });
    };
    
});
    app.directive('checkList', function() {
        return {
            scope: {
                list: '=checkList',
                value: '@'
            },
            link: function(scope, elem, attrs) {
                var handler = function(setup) {
                    var checked = elem.prop('checked');
                    var index = scope.list.indexOf(scope.value);

                    if (checked && index == -1) {
                        if (setup) elem.prop('checked', false);
                        else scope.list.push(scope.value);
                    } else if (!checked && index != -1) {
                        if (setup) elem.prop('checked', true);
                        else scope.list.splice(index, 1);
                    }
                };
      
                var setupHandler = handler.bind(null, true);
                var changeHandler = handler.bind(null, false);
            
                elem.on('change', function() {
                    scope.$apply(changeHandler);
                });
                scope.$watch('list', setupHandler, true);
            }
        };
    });


app.filter('unsafe', function ($sce) { return $sce.trustAsHtml; });

function help() {
    $('.help').show();
    $('.nohelp').hide();
}
function nohelp() {
    $('.help').hide();
    $('.nohelp').show();
}
app.controller('imgCtrl', function ($scope) {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function () {
        readURL(this);
    });
});
    


