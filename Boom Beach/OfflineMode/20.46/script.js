var base = Module.findBaseAddress("libg.so");

base.add(0x2677B6).writeU8(1);

Java.perform(function () { 
    var context = Java.use('android.app.ActivityThread').currentApplication().getApplicationContext();

    Java.scheduleOnMainThread(function() {
            var toast = Java.use("android.widget.Toast");
            toast.makeText(Java.use("android.app.ActivityThread").currentApplication().getApplicationContext(), Java.use("java.lang.String").$new("FRIDA BY ROMASHKA!"), 1).show();
    });
});
