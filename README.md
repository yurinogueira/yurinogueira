<table align="center">
<tr>
<th>yurinogueira.yurinogueira.YuriNogueira</th>
<th>f_framework.h</th>
<th>f_framework.c</th>
</tr>
<tr>
<td style="width: 290px">

```java
public class YuriNogueira {

    public static void main(String[] args) {
       var app = new AdditionApplication();
       var server = new GatewayServer(app);
       server.start();
    }

    public String getName() {
        return "Yuri Nogueira";
    }

    public String[] getFavoriteLanguages() {
        return {"C", "Java", "Python"};
    }
}
```

</td>
<td>

```h
// Returns the favorite framework
char* f_framework();
```

</td>
</td>
<td>

```c
char* f_framework()
{
    return "Django";
}
```

</td>
</tr>

<tr>
<th colspan="3">views</th>
</tr>
<tr>
<td colspan="3">

```python
class YuriNogueiraAPIView(APIView):
    java_gateway_class = JavaGateway
    ctype_class = CDLL

    def java_instance(self):
        gateway = self.java_gateway_class()
        return gateway.yurinogueira.yurinogueira.YuriNogueira()

    def c_loader(self):
        libname = pathlib.Path().absolute()
        return self.ctype_class(libname)

    def get(self, request):
        method = request.data["method"]
        instance = self.java_instance() if method != "f_framework" else c_loader()

        return Response(getattr(instance, method), status=HTTP_200_OK)
```

</td>
</tr>
</table>
