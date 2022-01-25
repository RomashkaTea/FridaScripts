const inet_addr =new NativeFunction(Module.findExportByName('libc.so','inet_addr'),'int',['pointer']);

var yourAddress = "127.0.0.1";

Interceptor.attach(Module.findExportByName('libc.so','connect'),{
	onEnter:function(args) {
		Memory.writeInt(args[1].add(4), inet_addr(Memory.allocUtf8String(yourAddress)));
	}
});
