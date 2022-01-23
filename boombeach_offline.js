// This script by PhoenixFire, it's obfuscated but i deobfuscate it. (version: unk)

const base = Module.findBaseAddress("libg.so");

var offlinePtr = ptr(base.add(0x2f728c));
var testNamePtr = ptr(base.add(0x2baecd));
var x = Interceptor.attach(Module.findExportByName("libc.so", "__cxa_atexit"), {
    onEnter: function (args) {
        x.detach();
        offlinePtr.writeU8(1);
        Memory.protect(testNamePtr, 38, "rwx");
        testNamePtr.writeUtf8String('PhoenixFire');
     }
});
