import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Checkbox, Divider, Typography, Button } from '@material-ui/core';


// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from 'components';

// Component styles
import styles from './styles';

class Notifications extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            subtitle="Manage the notifications"
            title="Notifications"
          />
        </PortletHeader>
        <PortletContent noPadding>
<PortletLabel
            subtitle="
                     Telegram adalah aplikasi perpesanan tercepat di pasar, menghubungkan orang-orang melalui jaringan pusat data yang unik dan terdistribusi di seluruh dunia.
"/>  <p><b>Telegram</b></p>

 <PortletLabel
            subtitle="
            
            
            Telegram adalah aplikasi perpesanan tercepat di pasar, menghubungkan orang-orang melalui jaringan pusat data yang unik dan terdistribusi di seluruh dunia.
<br/>
              <b>Cepat</b>
                        <br/>
                        <b>SYNCED </b>
                        <br/>
                        Anda dapat mengakses pesan Anda dari semua perangkat sekaligus. Mulailah mengetik di ponsel Anda dan selesaikan pesan dari tablet atau laptop Anda. Jangan pernah kehilangan data Anda lagi.
                      <br/>
                        <b>TANPA BATAS </b>
                        <br/>
                        Anda dapat mengirim media dan file, tanpa batasan pada jenis dan ukurannya. Seluruh riwayat obrolan Anda tidak memerlukan ruang disk pada perangkat Anda, dan akan disimpan dengan aman di cloud Telegram selama Anda membutuhkannya.
                      <br/>
                        <b>SYNCED </b>
                        <br/>
                        Kami menjadikannya sebagai misi kami untuk memberikan keamanan terbaik yang dikombinasikan dengan kemudahan penggunaan. Semua yang ada di Telegram, termasuk obrolan, grup, media, dll. Dienkripsi menggunakan kombinasi enkripsi AES 256-bit simetris, enkripsi RSA 2048-bit, dan pertukaran kunci aman Diffie-Hellman.

<br/>
                        <b>Kuat </b>
                        <br/> Anda dapat membuat obrolan grup hingga 200.000 anggota, berbagi video besar, dokumen apa pun (.DOC, .MP3, .ZIP, dll.), Dan bahkan mengatur bot untuk tugas tertentu. Ini adalah alat yang sempurna untuk hosting komunitas online dan mengoordinasikan kerja tim.

<br/>
                        <b>Dapat Diandalkan </b>
                        <br/> Dibangun untuk mengirimkan pesan Anda dalam byte minimum yang memungkinkan, Telegram adalah sistem pengiriman pesan paling andal yang pernah dibuat. Ia bekerja bahkan pada koneksi seluler terlemah.

<br/>
                        <b>FUN</b>
                        <br/> Telegram memiliki alat pengeditan foto dan video yang kuat dan platform stiker / GIF terbuka untuk memenuhi semua kebutuhan ekspresif Anda.

<br/>
                        <b>SEDERHANA </b>
                        <br/> Sementara memberikan berbagai fitur yang belum pernah terjadi sebelumnya, kami sangat berhati-hati untuk menjaga antarmuka tetap bersih. Dengan desain minimalis, Telegram ramping dan mudah digunakan.

<br/>
                        <b>100% GRATIS & TANPA IKLAN </b>
                        <br/> Telegram gratis dan akan selalu gratis. Kami tidak akan menjual iklan atau memperkenalkan biaya berlangganan.

<br/>
                        <b>PRIVATE </b>
                        <br/>Kami menjaga privasi Anda dengan serius dan tidak akan pernah memberikan akses pihak ketiga ke data Anda.
                        
                  "/>       
         
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="outlined"
          >
            Save
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

Notifications.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Notifications);
